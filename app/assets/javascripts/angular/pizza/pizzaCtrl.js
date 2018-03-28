//   P I Z Z A   C T R L

pizzaApp.controller("PizzaListCtrl", [ '$rootScope', '$scope', 'itemsService', 'cartService', 'customPizzaService', '$http', function ($rootScope, $scope, itemsService, cartService, customPizzaService, $http) {

    $scope.ready = false;

    // Get pizza list from service
    var promiseObj = itemsService.getPizzaList();
    promiseObj.then(function(value) {
        $scope.pizza_list = value;
        $scope.ready = true;
    });

    // Decrease/increase quantity in items list only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            item.qnty--;
            // cartService.decreaseData(item);
        }
        // $rootScope.$emit('addPizza');
    };
    $scope.increase = function(item){
        item.qnty++;
        // cartService.increaseData(item);
        // $rootScope.$emit('addPizza');
    };

    // Add custom pizza for customization process
    $scope.addCustomPizza = function(pizza){
        angular.element(document.querySelector("body")).addClass('overflow-hidden');
        var custom_pizza_container = angular.element(document.querySelector(".custom-pizza-container"));
        custom_pizza_container.addClass('visible');
        customPizzaService.addCustomPizza(pizza);
        $rootScope.$emit('pizzaIngredients');
    };

    $scope.pizzaAddToCart = function (pizza) {
        var pizza_to_cart = {};
        for (key in pizza) {
            pizza_to_cart[key] = pizza[key];
        }

        cartService.setData(pizza);
        $rootScope.$emit('addPizza');
        pizza.qnty = 1;
    };

}]);