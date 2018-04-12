ConstructorCtrl.$inject = ['$rootScope', '$scope', '$http', 'constructorService', 'cartService'];

pizzaApp.controller('ConstructorCtrl', ConstructorCtrl);

function ConstructorCtrl($rootScope, $scope, $http, constructorService, cartService){

    $scope.baseprice = false;

    // All ingredients to choose from (we get them from ItemsService)
    $http({method: 'GET', url: '/api/v1/ingredients.json'}).
    then(function success(response) {
        $scope.ingredients_list = response.data;
    });

    // Ingredients we choose to put inside constructor pizza
    $scope.constructor_ingredients = constructorService.getConstructorIngredients();

    // Get base constructor
    var promiseObj = constructorService.getConstructorBase();
    promiseObj.then(function(value) {
        $scope.constructed_pizza = value;
        constructorService.setBasePrice(value);

        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
        $scope.baseprice = true;
    });

    // Set sauce option
    $scope.sauce = "red";
    $scope.getSauce = function (sauce) {
        $scope.sauce = sauce;
    };

    // Increase / decrease
    $scope.decrease = function (ingredient) {
        constructorService.decrease(ingredient)
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };
    $scope.increase = function (ingredient) {
        constructorService.increase(ingredient)
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function (ingredient) {
        constructorService.toggleIngredient(ingredient);
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };

    // Reset all ingredients
    $scope.resetIngredients = function () {
        $scope.constructor_ingredients = constructorService.resetConstructorIngredients();
        $scope.totalPrice = constructorService.resetConstructorPizzaTotal();
    };

    $scope.constructorPizzaAddToCart = function () {
        var pizza_to_cart = {};
        for (key in $scope.constructed_pizza) {
            pizza_to_cart[key] = $scope.constructed_pizza[key];
        }
        pizza_to_cart['price'] = $scope.totalPrice;
        pizza_to_cart.ingredients = constructorService.getConstructorIngredients();
        pizza_to_cart.sauce = $scope.sauce;
        $scope.constructor_ingredients = constructorService.resetConstructorIngredients();
        $('.floated').removeClass('active');
        $scope.totalPrice = constructorService.resetConstructorPizzaTotal();
        cartService.setData(pizza_to_cart);
        $rootScope.$emit('addPizza');

        // Show successfully added to cart alert
        var success = $(event.target).parent().find('.success-message');
        success.addClass('visible');
        setTimeout(function() {
            success.removeClass('visible');
        }, 1500);

    }

}