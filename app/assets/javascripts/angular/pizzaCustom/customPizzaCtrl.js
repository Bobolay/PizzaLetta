// Filter ingredients Function

pizzaApp.filter('filterInArray', function($filter){
        return function(list, arrayFilter, element){
            // console.log(arrayFilter);
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

    $rootScope.$on('pizzaIngrediants', function($event) {
        $scope.custom_pizza_ingredients = customPizzaService.getCustomPizzaIngredients();
        $scope.totalPrice = cartService.total;
    })

    //   Additional ingredients
    $scope.custom_ingredients = customPizzaService.getCustomIngredients();
    // Increase / decrease
    $scope.decrease = function(ingredient){
        customPizzaService.decrease(ingredient)
        $scope.totalPrice = cartService.total;
    };
    $scope.increase = function(ingredient){
        customPizzaService.increase(ingredient)
        $scope.totalPrice = cartService.total;
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function(ingredient){
        customPizzaService.toggleIngredient(ingredient)
        $scope.totalPrice = cartService.total;
    };

    // Add custom pizza to cart
    $scope.customPizzaAddToCart = function(){
        // console.log(pizza);
        cartService.newcart.push(customPizzaService.getCustomPizza());
        console.log('qweadsadasdas ',cartService.newcart);
    };

})