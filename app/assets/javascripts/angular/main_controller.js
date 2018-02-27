//   A L L   I N   O N E


//   L I S T   O F   I T E M S

pizzaApp.controller("PizzaListCtrl", function ($scope, itemsService, cartService, customPizzaService) {

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
        customPizzaService.addCustomPizza(pizza);
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


angular.module('Test', [])
    .filter('inArray', function($filter){
        return function(list, arrayFilter, element){
            if(arrayFilter){
                console.log("Arr filter: ", arrayFilter);
                return $filter("filter")(list, function(listItem){
                    console.log(listItem[element]);
                    return arrayFilter.indexOf(listItem[element]) == -1;
                });
            }
        };
    });


// pizzaApp
//     .filter('filterIngredients', function($filter){
//         return function(list, arrayFilter, name){
//             if(arrayFilter){
//                 console.log(arrayFilter);
//                 return $filter("filter")(list, function(listItem){
//                     // console.log(listItem[name]);
//                     return arrayFilter.indexOf(listItem[name]) == -1;
//                 });
//             } else {
//                 console.log("nothing to compare with!");
//             }
//         };
//     });


//   C U S T O M   P I Z Z A   C O N T R O L L E R
pizzaApp.controller("CustomPizzaCtrl", function ($scope, cartService, customPizzaService, ingredientsService) {

    //   Custom pizza
    $scope.custom_pizza = customPizzaService.getCustomPizza();
    // $scope.custom_pizza_ingredients = customPizzaService.getCustomPizzaIngredients();

    //   All ingredients
    $scope.custom_ingredients = customPizzaService.getCustomIngredients();

    // Total price for pizza + ingredients
    $scope.total = customPizzaService.getTotal();

    $scope.ingPrice = 0;

    //   Decrease/increase
    // $scope.decrease = function(ingredient){
    //     if (ingredient.qnty == 1 ) {
    //         return;
    //     } else {
    //         ingredient.qnty--;
    //         $scope.ingPrice = $scope.ingPrice - ingredient.price;
    //     }
    // },
    // $scope.increase = function(ingredient){
    //     ingredient.qnty++;
    //     $scope.ingPrice = $scope.ingPrice + ingredient.price;
    // },
    $scope.decrease = function(ingredient){
        customPizzaService.decrease(ingredient)
    };
    $scope.increase = function(ingredient){
        customPizzaService.increase(ingredient)
    };

    // Add or remove ingredient from pizza
    $scope.toggleIngredient = function(ingredient){
        customPizzaService.toggleIngredient(ingredient)
    };

    // Add custom pizza to cart
    $scope.customPizzaAddToCart = function(pizza){
        console.log(pizza);
    }

})


//   C U S T O M   P I Z Z A   S E R V I C E
pizzaApp.factory("customPizzaService", function(){

    // List of all ingredients
    var custom_ingredients = [];

    // Choosed pizza for customization
    var custom_pizza = {};
    // var pizza_price = 0;
    // var custom_pizza_ingredients = [];
    var qwerty = 0;

    return {
        getCustomPizza: function () {
            return custom_pizza;
        },
        decrease: function(ingredient){
            if (ingredient.qnty == 1 ) {
                return;
            } else {
                ingredient.qnty--;
                qwerty -= ingredient.price;
                console.log(qwerty);
                // $scope.ingPrice = $scope.ingPrice - ingredient.price;
            }
        },
        increase: function(ingredient){
            ingredient.qnty++;
            qwerty += ingredient.price;
            console.log(qwerty);
        },
        getTotal: function(){
            return qwerty;
        },
        // getCustomPizzaIngredients: function () {
        //     return custom_pizza_ingredients;
        // },
        addCustomPizza: function (pizza) {
            if (typeof pizza === 'object') {
                custom_pizza.imgUrl = pizza.imgUrl;
                custom_pizza.name = pizza.name;
                custom_pizza.qnty = pizza.qnty;
                custom_pizza.ingredients = pizza.ingredients;
                custom_pizza.price = pizza.price;
                // pizza_price = pizza.price;
                // console.log(pizza_price);
            } else {
                return false;
            }
            custom_pizza_ingredients = pizza.ingredients.map(function(prop) {return prop.name;});
            console.log("Ingredients of custom pizza: ", custom_pizza_ingredients);
        },

        // Add or remove ingredient from out custom pizza
        toggleIngredient: function(ingredient){
            var existent_ingredient = custom_ingredients.find(function(matched){
                return matched.name === ingredient.name;
            });
            if (existent_ingredient) {
                var target = custom_ingredients.indexOf(ingredient);
                if(target != -1) {
                    // We don't want eat this shit
                    custom_ingredients.splice(target, 1);
                    // So let's remove 'active' class by doing this
                    ingredient.active_ingredient = false;
                    qwerty -= ingredient.price;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                qwerty += ingredient.price;
            }
        },
        getCustomIngredients: function(){
            return custom_ingredients;
        }


    }

});


//   C A R T

pizzaApp.factory("cartService", function(){

    var cart = [];
    var pizza_qnty = cart.length;

    return {
        getCart: function () {
            return cart;
        },
        getPizzaQnty: function () {
            return pizza_qnty;
        },
        addToCart: function (pizza) {
            var existent_pizza = cart.find(function(matched){
                return matched.name === pizza.name;
            });
            if (existent_pizza) {
                existent_pizza.qnty += pizza.qnty || 0;
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



//   S E N D   O R D E R

// pizzaApp.controller("postController", function ($scope, $http) {

//     // create a blank object to handle form data.
//     $scope.message = {
//         "name": "Bob",
//         "age": 25
//     };
//     // calling our submit function.
//     $scope.submitForm = function() {
//         var url = 'structure_parts';
//         var data = {data: $scope.message};
//         var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
//         $http.get(url, data, headers)
//            .then(function(data) {
//                 console.log(data);  
//                 if (data.errors) {
//                     // Showing errors.
//                     $scope.errorContent = data.errors.errorContent;
//                 } else {
//                     $scope.message = data.message;
//                 }
//             });
//     };

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