pizzaApp.controller("ConstructorCtrl", function ($scope, ingredientsService, constructorService) {

    // Constructed pizza
    // $scope.constructed_pizza = constructorService.getCustomPizza();

    // Ingredients list (we get them from ItemsService)
    $scope.ingredients_list = ingredientsService.getIngredients();

    // Additional ingredients
    $scope.custom_ingredients = constructorService.getCustomIngredients();

    // Total price of constructor pizza
    $scope.total_price = constructorService.getConstructorPizzaTotal();

    // Set sauce option
    $scope.sauce = "red";
    $scope.getSauce = function(sauce) {
        $scope.sauce = sauce;
    };

    // Increase / decrease
    $scope.decrease = function(ingredient){
        constructorService.decrease(ingredient)
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };
    $scope.increase = function(ingredient){
        constructorService.increase(ingredient)
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function(ingredient){
        constructorService.toggleIngredient(ingredient);
        $scope.totalPrice = constructorService.getConstructorPizzaTotal();
    };

});