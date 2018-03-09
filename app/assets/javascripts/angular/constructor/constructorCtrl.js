pizzaApp.controller("ConstructorCtrl", function ($rootScope, $scope, ingredientsService, constructorService) {

    $scope.constructed_pizza = {
        name: "Конструктор",
        price: 50,
        qnty: 1,
        ingredients: []
    };

    // Ingredients list (we get them from ItemsService)
    $scope.ingredients_list = ingredientsService.getIngredients();

    // Ingredients we choose to put inside constructor pizza
    $scope.custom_ingredients = constructorService.getConstructorIngredients();

    // Total price of constructor pizza
    $scope.totalPrice = constructorService.getConstructorPizzaTotal();

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

    $scope.resetIngredients = function () {
        $scope.custom_ingredients = [];
        // $scope.totalPrice = constructorService.constructor_pizza_total;
    }

});