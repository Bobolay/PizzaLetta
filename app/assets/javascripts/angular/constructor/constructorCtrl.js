pizzaApp.controller("ConstructorCtrl", function ($rootScope, $scope, ingredientsService, constructorService) {

    // Ingredients list (we get them from ItemsService)
    $scope.ingredients_list = ingredientsService.getIngredients();

    // Ingredients we choose yo put inside constructor pizza
    $scope.custom_ingredients = constructorService.getConstructorIngredients();

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