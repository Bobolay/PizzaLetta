// Filter ingredients Function

pizzaApp.filter('filterInArray', function($filter){
        return function(list, arrayFilter, element){
            if(arrayFilter){
                return $filter("filter")(list, function(listItem){
                    return arrayFilter.indexOf(listItem[element]) == -1;
                });
            }
        };
    });

//   C U S T O M   P I Z Z A   C O N T R O L L E R
pizzaApp.controller("CustomPizzaCtrl", function ($rootScope, $scope, cartService, customPizzaService, ingredientsService) {

    //   Custom pizza
    $scope.custom_pizza = customPizzaService.getCustomPizza();

    $rootScope.$on('pizzaIngredients', function($event) {
        $scope.custom_pizza_ingredients = customPizzaService.getCustomPizzaIngredients();
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    });

    //   Additional ingredients that we choose from all list
    $scope.custom_ingredients = customPizzaService.getCustomIngredients();

    // Increase / decrease
    $scope.decrease = function(ingredient){
        customPizzaService.decrease(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };
    $scope.increase = function(ingredient){
        customPizzaService.increase(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function(ingredient){
        customPizzaService.toggleIngredient(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };

    // Add custom pizza to cart
    $scope.customPizzaAddToCart = function(){
        cartService.newcart.push(customPizzaService.getCustomPizza());
    };

})