var addToCart = function(element){
    console.log(element);
}

//   D R I N K S   C T R L

pizzaApp.controller("DrinksCtrl", function ($scope, drinksService, cartService) {

    //   Drinks list (we get them from DrinksService)
    $scope.drinks = drinksService.getDrinks();

    //   Decrease/increase quantity in items list only
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
    $scope.addToCart = function(drink){
        console.log(drink);
        cartService.addToCart(drink);
    };

});