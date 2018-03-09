//   D R I N K S   C T R L

pizzaApp.controller("DrinksCtrl", function ($scope, drinksService, cartService, $http) {

    // Drinks list (we get them from DrinksService)
    $scope.drinks = drinksService.getDrinks();

    // Get drinks list
    // $http({method: 'GET', url: 'http://localhost:3000/api/v1/drinks.json'}).
    // then(function success(response) {
    //     $scope.drinks = response.data;
    // });

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
    $scope.drinkAddToCart = function(drink){
        drink['total_price'] = drink.qnty * drink.price;
        cartService.appCart.push(drink);
        console.log("cart ",cartService.appCart);
    };

});