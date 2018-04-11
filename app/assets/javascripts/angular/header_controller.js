HeaderCtrl.$inject = ['$http', '$rootScope', '$scope', 'cartService'];

pizzaApp.controller('HeaderCtrl', HeaderCtrl);

function HeaderCtrl($http, $rootScope, $scope, cartService){

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

    $scope.submitCallForm = function () {

        var url = 'call';
        var data = {
            phone_number: $scope.phone_number
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'
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

}