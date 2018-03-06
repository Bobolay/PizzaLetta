pizzaApp.controller("ConstructorCtrl", function ($scope, ingredientsService) {

    //   Ingredients list (we get them from ItemsService)
    $scope.ingredients_list = ingredientsService.getIngredients();

    //   Set size option
    $scope.size = "big";
    $scope.getSize = function(size) {
        $scope.size = size;
    };

    //   Set sauce option
    $scope.sauce = "red";
    $scope.getSauce = function(sauce) {
        $scope.sauce = sauce;
    };

    var custom_pizza = {
        pizzaImgUrl: "pizza-contructor.png",
        name: "DIY pizza",
        size: $scope.size,
        sauce: $scope.sauce,
        ingredients: []

    };

    $scope.choosed_in_category = 0;

    // $scope.toggleIngredient = function (item) {
    //     console.log(angular.element(item).find('.name'));
    // };

    // $scope.toggleIngredient = function($event){
    //     console.log($event.currentTarget)
    //     custom_pizza.ingredients.push(this);
    //     console.log(custom_pizza);
    // }

});