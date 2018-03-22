pizzaApp.controller("CartCtrl", [ '$window', '$rootScope', '$scope', 'cartService', function ($window, $rootScope, $scope, cartService) {

    //   Items list in cart
    // $scope.cart = [{name: "bob"},{name: "drunk"}];

    $scope.cart = cartService.getData();

    // $scope.$watch('cartService.getData()', function(newVal) {
    //     // console.log("New Data: " , newVal);
    //     $scope.cart = newVal;
    // });

    // $rootScope.$on('addPizza', function($event) {
    //     $scope.cart = cartService.getData();
    // });

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            item.qnty--;
        }
    },
    $scope.increase = function(item){
        item.qnty++;
    }

    // Remove item from cart
    // $scope.remove = function(pizza) {
    //     cartService.remove(pizza);
    // },

    //   Buy items
    // $scope.buy = function(pizza){
    //     cartService.buy(pizza);
    // }

}]);