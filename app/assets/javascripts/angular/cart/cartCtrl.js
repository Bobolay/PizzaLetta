pizzaApp.controller("CartCtrl", [ '$window', '$rootScope', '$scope', 'cartService', function ($window, $rootScope, $scope, cartService) {

    // $scope.$watch('cartService.getData()', function(newVal) {
    //     // console.log("New Data: " , newVal);
    //     $scope.cart = newVal;
    // });

    // Items list in cart
    $rootScope.$on('addPizza', function($event) {
        $scope.cart = cartService.getData();
    });

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            item.qnty--;
            cartService.pizza_qnty--;
        }
    },
    $scope.increase = function(item){
        item.qnty++;
        cartService.pizza_qnty++;
    },

    // Remove item from cart
    $scope.removeItem = function(item) {
        cartService.removeItem(item);
        $scope.cart = cartService.getData();
        $rootScope.$emit('addPizza');
    }

}]);