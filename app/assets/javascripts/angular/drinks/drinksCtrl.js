//   D R I N K S   C T R L

pizzaApp.controller("DrinksCtrl", [ '$rootScope', '$scope', 'drinksService', 'cartService', '$http', function ($rootScope, $scope, drinksService, cartService, $http) {

    $scope.ready = false;

    // Get drinks list
    $http({method: 'GET', url: '/api/v1/drinks.json'}).
    then(function success(response) {
        $scope.drinks = response.data;
        $scope.ready = true;
    });

    // Decrease/increase quantity in items list only
    $scope.decrease = function(drink){
        if (drink.qnty == 1 ) {
            return;
        } else {
            drink.qnty--;
        }
    };
    $scope.increase = function(drink){
        drink.qnty++;
    };

    // Add drink to cart
    $scope.drinkAddToCart = function (drink) {
        cartService.setData(drink);
        $rootScope.$emit('addPizza');
        drink.qnty = 1;
    };

}]);