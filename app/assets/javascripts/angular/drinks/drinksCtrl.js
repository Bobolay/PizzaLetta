DrinksCtrl.$inject = ['$rootScope', '$scope', 'cartService', '$http'];

pizzaApp.controller('DrinksCtrl', DrinksCtrl);

function DrinksCtrl($rootScope, $scope, cartService, $http){

    $scope.ready = false;

    // Get drinks list
    $http({method: 'GET', url: '/api/v1/drinks.json'}).
    then(function success(response) {
        $scope.drinks = response.data;
        $scope.ready = true;
    });

    // Decrease/increase quantity in items list only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            item.qnty--;
        }
    };
    $scope.increase = function(item){
        item.qnty++;
    };

    // Add drink to cart
    $scope.AddToCart = function (drink) {
        var drink_to_cart = {};
        for (key in drink) {
            drink_to_cart[key] = drink[key];
        }
        cartService.setData(drink_to_cart);
        $rootScope.$emit('addPizza');
        drink.qnty = 1;

        var success = $(event.target).parent().find('.success-message');
        success.addClass('visible');
        setTimeout(function() {
            success.removeClass('visible');
        }, 1500);
    };

}