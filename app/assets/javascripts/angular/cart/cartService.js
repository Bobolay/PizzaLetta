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