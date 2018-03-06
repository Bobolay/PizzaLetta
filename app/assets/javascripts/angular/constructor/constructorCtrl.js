pizzaApp.controller("ConstructorCtrl", function ($scope, ingredientsService, constructorService) {

    //   Constructed pizza
    $scope.constructed_pizza = constructorService.getCustomPizza();

    //   Ingredients list (we get them from ItemsService)
    $scope.ingredients_list = ingredientsService.getIngredients();

    //   Additional ingredients
    $scope.custom_ingredients = constructorService.getCustomIngredients();

    // Increase / decrease
    $scope.decrease = function(ingredient){
        constructorService.decrease(ingredient)
    };
    $scope.increase = function(ingredient){
        constructorService.increase(ingredient)
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function(ingredient){
        constructorService.toggleIngredient(ingredient)
    };

});


























//   Set sauce option
// $scope.sauce = "red";
// $scope.getSauce = function(sauce) {
//     $scope.sauce = sauce;
// };
