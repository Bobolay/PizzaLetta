pizzaApp.controller("HeaderCtrl", function ($scope, cartService) {

    // Header title depends from current page
    $scope.title = "Header_title_angular";

    // Get pizza qnty from cart
    $scope.pizza_qnty = cartService.getPizzaQnty();

});