CartCtrl.$inject = ['$http', '$window', '$rootScope', '$scope', 'cartService'];

pizzaApp.controller('CartCtrl', CartCtrl);

function CartCtrl($http, $window, $rootScope, $scope, cartService) {

    // Get items in cart
    $scope.cart = cartService.getData();
    // Get total price of all item in cart
    $scope.total_price = cartService.getTotalPrice();

    angular.element(document).ready(function () {
        $scope.total_price = cartService.getData();
        $scope.total_price = cartService.getTotalPrice();
    });

    $rootScope.$on('addPizza', function ($event) {
        $scope.total_price = cartService.getTotalPrice();
    });

    // Items list in cart
    $rootScope.$on('addPizza', function($event) {
        $scope.cart = cartService.getData();
    });

    // Additional sauces as option (red and white)
    // $scope.additional_sauces = cartService.getSauces();

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            cartService.decreaseData(item);
        }
        $rootScope.$emit('addPizza');
    };
    $scope.increase = function(item){
        cartService.increaseData(item);
        $rootScope.$emit('addPizza');
    };

    // Remove item from cart
    $scope.removeItem = function(item) {
        cartService.removeItem(item);
        $scope.cart = cartService.getData();
        $rootScope.$emit('addPizza');
    };

    // Add or remove optional sauce (red or white)
    $scope.toggleIngredient = function (ingredient) {
        cartService.toggleIngredient(ingredient);
    };

    $scope.selectedTab = 1;
    $scope.setTabValue = function(index){
        $scope.selectedTab = index;
    };

    // SENDING INFO AND ORDER

    $scope.order = {};
    $scope.order.orderway = "Кур'єр";

    // POST REQUEST

    $scope.submitForm = function () {
        $('.progress-wrap').addClass('visible');
        var url = 'order';
        var data = {
            cart: $scope.cart,
            info: $scope.order,
            totalprice: $scope.total_price
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        $http.post(url, data, config)
            .then(
                function(response){
                    // success callback
                    $scope.message = data.message;
                    $('.progress-wrap').removeClass('visible');
                    var success = angular.element(document.querySelector(".success-wrap"));
                    success.addClass('visible');
                    // Clear LS
                    localStorage.setItem('storageArray',JSON.stringify([]));
                },
                function(response){
                    // failure callback
                    alert("Вибачте, при замовленні сталась помилка.");
                    $('.progress-wrap').removeClass('visible');
                }
            );
    };
}

// GET REQUEST

// $scope.submitForm = function() {
//     var url = '/order';
//     var data = {
//         cart: $scope.cart,
//         info: $scope.order,
//         totalprice: $scope.total_price
//     };
//     $http.get(url, data)
//        .then(function(data) {
//             if (data.errors) {
//                 // Showing errors.
//                 $scope.errorContent = data.errors.errorContent;
//             } else {
//                 console.log(data);
//                 $scope.message = data.message;
//             }
//        });
// };