//   D R I N K S   C T R L

pizzaApp.controller("DrinksCtrl", function ($scope, drinksService, cartService) {

    // Drinks list (we get them from DrinksService)
    $scope.drinks = drinksService.getDrinks();

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