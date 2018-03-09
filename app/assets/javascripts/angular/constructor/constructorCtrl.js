pizzaApp.controller("ConstructorCtrl", [ '$rootScope', '$scope', '$http', 'ingredientsService', 'constructorService', 'cartService', function ($rootScope, $scope, $http, ingredientsService, constructorService, cartService) {

    // $scope.constructed_pizza = {
    //     name: "Конструктор",
    //     price: 50,
    //     qnty: 1,
    //     ingredients: []
    // };

    // Get base for construc tor pizza
    // $http({method: 'GET', url: 'http://localhost:3000/api/v1/constructor.json'}).
    //     then(function success(response) {
    //         $scope.constructed_pizza = response.data;
    // });

    $scope.constructed_pizza = constructorService.getConstructorBase();
    console.log($scope.constructed_pizza);

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
    };

    $scope.constructorPizzaAddToCart = function () {
        var constructed_pizza = customPizzaService.createCustomPizza();
        var pizza_to_cart = {};
        for (key in constructed_pizza) {
            pizza_to_cart[key] = constructed_pizza[key];
        }
        cartService.appCart.push(pizza_to_cart);
        console.log("cart ",cartService.appCart);
    }

}]);