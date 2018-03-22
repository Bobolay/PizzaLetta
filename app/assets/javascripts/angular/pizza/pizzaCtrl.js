//   P I Z Z A   C T R L

pizzaApp.controller("PizzaListCtrl", [ '$rootScope', '$scope', 'itemsService', 'cartService', 'customPizzaService', '$http', function ($rootScope, $scope, itemsService, cartService, customPizzaService, $http) {

    $scope.ready = false;

    // Items list (we get them from ItemsService)
    // $scope.pizza_list = itemsService.getPizzaItems();

    // Get pizza list
    // $http({method: 'GET', url: '/api/v1/pizzas.json'}).
    // then(function success(response) {
    //     $scope.pizza_list = response.data;
    //     $scope.ready = true;
    // });

    // Get pizza list from service
    var promiseObj = itemsService.getPizzaList();
    promiseObj.then(function(value) {
        $scope.pizza_list = value;
        $scope.ready = true;
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
        angular.element(document.querySelector("body")).addClass('overflow-hidden');
        var custom_pizza_container = angular.element(document.querySelector(".custom-pizza-container"));
        custom_pizza_container.addClass('visible');
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