pizzaApp.controller("HeaderCtrl", [ '$rootScope', '$scope', 'cartService', function ($rootScope, $scope, cartService) {

    // Header title depends from current page
    $scope.title = "Header_title_angular";

    // Get pizza qnty from cart
    $scope.pizza_qnty = cartService.getPizzaQnty();

    $rootScope.$on('pizzaIngredients', function ($event) {
      $scope.totalPrice = cartService.total;
    })
}]);