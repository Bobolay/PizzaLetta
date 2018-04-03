pizzaApp.controller("HeaderCtrl", [ '$http', '$rootScope', '$scope', 'cartService', function ($http, $rootScope, $scope, cartService) {

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

    $scope.formdata = {};

    $scope.submitCallForm = function () {

        var url = 'call';
        var data = {
            phonenumber: $scope.formdata
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post(url, data, config)
            .then(
                function(response){
                    $scope.message = data.message;
                    var success = angular.element(document.querySelector(".success-wrap"));
                    success.addClass('visible');
                },
                function(response){
                    // failure callback
                    console.log("Not working!");
                }
            );
    };

}]);