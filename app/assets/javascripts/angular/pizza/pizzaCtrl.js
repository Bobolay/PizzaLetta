//   P I Z Z A   C T R L

pizzaApp.controller("PizzaListCtrl", [ '$rootScope', '$scope', 'itemsService', 'cartService', 'customPizzaService', '$http', function ($rootScope, $scope, itemsService, cartService, customPizzaService, $http) {

    // Items list (we get them from ItemsService)
    // $scope.pizza_list = itemsService.getPizzaItems();

    // Get pizza list
    $http({method: 'GET', url: '/api/v1/pizzas.json'}).
    then(function success(response) {
        $scope.pizza_list = response.data;
    });

    // Decrease/increase quantity in items list only
    $scope.decrease = function(pizza){
        if (pizza.qnty == 1 ) {
            return;
        } else {
            pizza.qnty--;
        }
    };
    $scope.increase = function(pizza){
        pizza.qnty++;
    };

    // Add custom pizza for customization process
    $scope.addCustomPizza = function(pizza){
        customPizzaService.addCustomPizza(pizza);
        $rootScope.$emit('pizzaIngredients');
    };

    // Add pizza to cart
    $scope.pizzaAddToCart = function(pizza){
        pizza['total_price'] = pizza.qnty * pizza.price;
        cartService.appCart.push(pizza);
        console.log("Cart ",cartService.appCart);
    };

}]);