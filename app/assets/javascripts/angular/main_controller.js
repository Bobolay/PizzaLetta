//   A L L   I N   O N E


//   L I S T   O F   I T E M S

pizzaApp.controller("PizzaListCtrl", function ($scope, itemsService, cartService) {

    //   Items list (we get them from ItemsService)
    $scope.pizza_list = itemsService.getPizzaItems();

    //   Decrease quantity
    $scope.decrease = function(pizza){
        cartService.decrease(pizza);
    }
    //   Increase quantity
    $scope.increase = function(pizza){
        cartService.increase(pizza);
    }

    //   Add item to cart
    $scope.addToCart = function(pizza){
        cartService.addToCart(pizza);
    }

});


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

    $scope.toggleIngredient = function (item) {
        console.log(angular.element(item).find('.name'));
    };

    // $scope.toggleIngredient = function($event){
    //     console.log($event.currentTarget)
    //     custom_pizza.ingredients.push(this);
    //     console.log(custom_pizza);
    // }

});


//   C A R T

pizzaApp.controller("CartCtrl", function ($scope, cartService) {

    //   Items list in cart
    $scope.cart = cartService.getCart();

    //   Decrease quantity
    $scope.decrease = function(pizza){
        cartService.decrease(pizza);
    }

    //   Increase quantity
    $scope.increase = function(pizza){
        cartService.increase(pizza);
    }

    // Remove item from cart
    $scope.remove = function(pizza) {
        cartService.remove(pizza);
    };

    //   Buy items
    $scope.buy = function(pizza){
        cartService.buy(pizza);
    }

})


//   S E R V I C E S

//   C A R T   F U N C T I O N A L

pizzaApp.factory("cartService", function(){
    var cart = [];
    return {
        getCart: function () {
            return cart;
        },
        addToCart: function (pizza) {
            cart.push(pizza);
        },
        decrease: function(pizza){
            if (pizza.qnty == 1 ) {
                return;
            } else {
                pizza.qnty--;
            }
        },
        increase: function(pizza){
            pizza.qnty++;
        },
        remove: function(pizza){
            cart.splice(pizza,1);
        },
        buy: function (pizza) {
            alert("Thank's for buying: ", pizza.name);
        }
    }

});