//   P I Z Z A   C T R L

pizzaApp.controller("PizzaListCtrl", function ($rootScope, $scope, itemsService, cartService, customPizzaService) {
console.log('2')
    //   Items list (we get them from ItemsService)
    $scope.pizza_list = itemsService.getPizzaItems();

    //   Decrease/increase quantity in items list only
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

    //   Add item to cart
    $scope.addToCart = function(pizza){
        cartService.addToCart(pizza);
    };

    //   Custom pizza
    $scope.addCustomPizza = function(pizza){
        customPizzaService.addCustomPizza(pizza);
        $rootScope.$emit('pizzaIngrediants');
    };

});