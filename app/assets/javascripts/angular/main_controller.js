//   A L L   I N   O N E


//   L I S T   O F   I T E M S

pizzaApp.controller("PizzaListCtrl", function ($scope, itemsService, cartService) {

    //   Items list (we get them from ItemsService)
    $scope.pizza_list = itemsService.getPizzaItems();

    //   Decrease/increase quantity in items list only
    $scope.decrease = function(pizza){
        if (pizza.qnty == 1 ) {
            return;
        } else {
            pizza.qnty--;
        }
    };
    $scope.increase = function(pizza){
        pizza.qnty++;
    };

    //   Add item to cart
    $scope.addToCart = function(pizza){
        cartService.addToCart(pizza);
    };

    //   Custom pizza
    $scope.addCustomPizza = function(pizza){
        cartService.addCustomPizza(pizza);
    };

});


//   C A R T
pizzaApp.controller("CartCtrl", function ($scope, cartService) {

    //   Items list in cart
    $scope.cart = cartService.getCart();

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(pizza){
        if (pizza.qnty == 1 ) {
            return;
        } else {
            pizza.qnty--;
        }
    },
    $scope.increase = function(pizza){
        pizza.qnty++;
    },

    // Remove item from cart
    $scope.remove = function(pizza) {
        cartService.remove(pizza);
    };

    //   Buy items
    $scope.buy = function(pizza){
        cartService.buy(pizza);
    }

})


//   C U S T O M   P I Z Z A
pizzaApp.controller("CustomPizzaCtrl", function ($scope, cartService) {

    //   Custom pizza
    $scope.custom_pizza = cartService.getCustomPizza();
    //   Decrease/increase quantity in cart only
    $scope.decrease = function(ingredient){
        if (ingredient.qnty == 1 ) {
            return;
        } else {
            ingredient.qnty--;
        }
    },
    $scope.increase = function(ingredient){
        ingredient.qnty++;
    }

})



//   S E R V I C E S

//   C A R T   F U N C T I O N A L

pizzaApp.factory("cartService", function(){

    var cart = [];
    var pizza_qnty = cart.length;

    var custom_pizza = {};

    return {
        getCart: function () {
            return cart;
        },
        getCustomPizza: function () {
            return custom_pizza;
        },
        getPizzaQnty: function () {
            return pizza_qnty;
        },
        addCustomPizza: function (pizza) {
            if (typeof pizza === 'object') {
                custom_pizza.imgUrl = pizza.imgUrl;
                custom_pizza.name = pizza.name;
                custom_pizza.qnty = pizza.qnty;
                custom_pizza.ingredients = pizza.ingredients;
            } else {
                return false
            }
        },
        addToCart: function (pizza) {
            var clone = cart.find(function(matched){
                return matched.name === pizza.name;
            });
            if (clone) {
                clone.qnty += pizza.qnty || 0;
            } else {
                cart.push({
                    'imgUrl': pizza.imgUrl,
                    'name': pizza.name,
                    'qnty': pizza.qnty,
                    'price': pizza.price,
                    'ingredients': pizza.ingredients
                });
            }
        },
        remove: function(pizza){
            cart.splice(pizza,1);
            pizza_qnty--;
            console.log(pizza_qnty);
        },
        buy: function (pizza) {
            alert("Thank's for buying: ", pizza.name);
        }

    }

});


// //   S E N D   O R D E R
//
// pizzaApp.controller("postController", function ($scope, $http) {
//
//     // create a blank object to handle form data.
//     $scope.message = {
//         "name": "Bob",
//         "age": 25
//     };
//     // calling our submit function.
//     $scope.submitForm = function() {
//
//         $http({
//             method  : 'POST',
//             url     : 'http://localhost:3000/checkout',
//             data    : {data: $scope.message},
//             headers : {'Content-Type': 'application/x-www-form-urlencoded'}
//         }).success(function(data) {
//             if (data.errors) {
//                 // Showing errors.
//                 $scope.errorContent = data.errors.errorContent;
//             } else {
//                 $scope.message = data.message;
//             }
//         });
//
//     };
//
// });



//   P I Z Z A   C O N S T R U C T O R

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

    // $scope.toggleIngredient = function (item) {
    //     console.log(angular.element(item).find('.name'));
    // };

    // $scope.toggleIngredient = function($event){
    //     console.log($event.currentTarget)
    //     custom_pizza.ingredients.push(this);
    //     console.log(custom_pizza);
    // }

});