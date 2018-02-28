pizzaApp.controller("CartCtrl", function ($scope, cartService) {

    //   Items list in cart
    $scope.cart = cartService.getCart();

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(pizza){
        if (pizza.qnty == 1 ) {
            return;
        } else {
            pizza.qnty--;
        }
    },
    $scope.increase = function(pizza){
        pizza.qnty++;
    },

    // Remove item from cart
    $scope.remove = function(pizza) {
        cartService.remove(pizza);
    };

    //   Buy items
    $scope.buy = function(pizza){
        cartService.buy(pizza);
    }

})