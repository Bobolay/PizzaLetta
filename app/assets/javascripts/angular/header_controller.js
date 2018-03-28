pizzaApp.controller("HeaderCtrl", [ '$rootScope', '$scope', 'cartService', function ($rootScope, $scope, cartService) {

    // Header title depends from current page

    // Get pizza qnty and total from cart on page load
    angular.element(document).ready(function () {
        $scope.total_price = cartService.getData();
        $scope.total_price = cartService.getTotalPrice();
        $scope.pizza_qnty = cartService.getPizzaQnty();
    });

    $rootScope.$on('addPizza', function ($event) {
        $scope.total_price = cartService.getTotalPrice();
        $scope.pizza_qnty = cartService.getPizzaQnty();
    });

    // Send event to show Cart (getData from LS)
    $scope.showCart = function () {
        $rootScope.$emit('addPizza');
    };

}]);