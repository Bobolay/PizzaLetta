//   A L L   I N   O N E


//   L I S T   O F   I T E M S

pizzaApp.controller("PizzaListCtrl", function ($scope, itemsService, cartService) {

    //   Items list (we get them from ItemsService)
    $scope.pizza_list = itemsService.getItems();

    //   Decrease quantity
    $scope.decrease = function(pizza){
        if (pizza.qnty == 1 ) {
            return;
        } else {
            pizza.qnty--;
        }
    }

    //   Increase quantity
    $scope.increase = function(pizza){
        pizza.qnty++;
    }

    //   Add item to cart
    $scope.addToCart = function(pizza){
        cartService.addToCart(pizza);
    }

});



//   C A R T

pizzaApp.controller("CartCtrl", function ($scope, cartService) {

    //   Items list in cart
    $scope.cart = cartService.getCart();

    //   Buy items
    $scope.buy = function(pizza){
        cartService.buy(pizza);
    }

})



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
        buy: function (pizza) {
            alert("Thatnk's for buying: ", pizza.name);
        }
    }
});



//   A L L   I T E M S   S E R V I C E

pizzaApp.factory("itemsService", function(){
    //   ITEMS collection
    var items = [
        {
            imgUrl: "hcmp84855_290760_s3.jpeg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                "constructor",
                "lemon",
                "pomidor",
                "leg",
                "hand"
            ],
            price: "121",
            qnty: 1,
            discount: "134"
        },
        {
            imgUrl: "IMG_5753-1.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                "ogirok",
                "pomidor",
                "hand",
                "soys"
            ],
            price: "87",
            qnty: 1
        },
        {
            imgUrl: "margharita1-600x480.jpeg",
            name: "Морська",
            category: "seafood",
            ingredients: [
                "mayonez",
                "vogirok",
                "oluvka",
                "pizza"
            ],
            price: "105",
            qnty: 1
        },
        {
            imgUrl: "piza400x300.jpg",
            name: "Сирна",
            category: "cheese",
            ingredients: [
                "ananas",
                "bananas",
                "klubnika",
                "kyriatyna"
            ],
            price: "100",
            qnty: 1
        },
        {
            imgUrl: "pizza-saucisse-piquante-2301.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                "olyvka",
                "pomidor",
                "sauce",
            ],
            price: "96",
            qnty: 1
        },
        {
            imgUrl: "small-1.jpg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                "lemon",
                "ananas",
                "pomidor",
                "oluvka",
                "pizza"
            ],
            price: "88",
            qnty: 1
        }
    ]
    //   Return all items from ITEMS collection
    return {
        getItems: function () {
            return items;
        }
    }

})