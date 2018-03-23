pizzaApp.controller("HeaderCtrl", [ '$rootScope', '$scope', 'cartService', function ($rootScope, $scope, cartService) {

    // Header title depends from current page

    // Get pizza qnty from cart
    $scope.pizza_qnty = cartService.getPizzaQnty();

    $rootScope.$on('pizzaIngredients', function ($event) {
      $scope.totalPrice = cartService.total;
    })

    // Send event to show Cart (getData from LS)
    $scope.showCart = function () {
        $rootScope.$emit('addPizza');
    };

}]);