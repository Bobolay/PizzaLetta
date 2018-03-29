// Filter ingredients Function

pizzaApp.filter('filterInArray', [ '$filter', function($filter){
        return function(list, arrayFilter, element){
            if(arrayFilter){
                return $filter("filter")(list, function(listItem){
                    return arrayFilter.indexOf(listItem[element]) == -1;
                });
            }
        };
    }]);

//   C U S T O M   P I Z Z A   C O N T R O L L E R
pizzaApp.controller("CustomPizzaCtrl", [ '$http', '$rootScope', '$scope', 'cartService', 'customPizzaService', function ($http, $rootScope, $scope, cartService, customPizzaService) {

    //   Custom pizza
    $scope.custom_pizza = customPizzaService.getCustomPizza();

    $rootScope.$on('pizzaIngredients', function($event) {
        $scope.custom_pizza_ingredients = customPizzaService.getCustomPizzaIngredients();
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
        $scope.custom_ingredients = customPizzaService.resetIngredients();
    });

    //   Ingredients list (we get them from ItemsService)
    $http({method: 'GET', url: '/api/v1/ingredients.json'}).
    then(function success(response) {
        $scope.ingredients_list = response.data;
    });

    //   Additional ingredients that we choose from all list
    $scope.custom_ingredients = customPizzaService.getCustomIngredients();

    // Increase / decrease
    $scope.decrease = function (ingredient) {
        customPizzaService.decrease(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };
    $scope.increase = function (ingredient) {
        customPizzaService.increase(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function (ingredient) {
        customPizzaService.toggleIngredient(ingredient);
        $scope.totalPrice = customPizzaService.getCustomPizzaTotal();
    };

    // Add custom pizza to cart
    $scope.customPizzaAddToCart = function () {
        var customized_pizza = customPizzaService.createCustomPizza();
        var pizza_to_cart = {};
        for (key in customized_pizza) {
            pizza_to_cart[key] = customized_pizza[key];
        }
        cartService.setData(pizza_to_cart);
        $rootScope.$emit('addPizza');

        // Show successfully added to cart alert
        var success = $(event.target).parent().find('.success-message');
        success.addClass('visible');
        setTimeout(function() {
            success.removeClass('visible');
        }, 1500);

    };

}]);