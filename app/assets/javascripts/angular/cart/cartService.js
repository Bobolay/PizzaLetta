pizzaApp.factory("cartService", function(){

    var cart = [];
    var pizza_qnty = cart.length;

    return {
        getCart: function () {
            return cart;
        },
        appCart: [],
        total: 0,
        getPizzaQnty: function () {
            return pizza_qnty;
        },
        addToCart: function (item) {
            var existent_item = cart.find(function(matched){
                return matched.name === item.name;
            });
            if (existent_item) {
                existent_item.qnty += item.qnty || 0;
            } else {
                cart.push({
                    'imgUrl': item.imgUrl,
                    'name': item.name,
                    'qnty': item.qnty,
                    'price': item.price,
                    'ingredients': item.ingredients,
                    'litre': item.litre
                });
            }
        },
        remove: function(item){
            cart.splice(item,1);
        },
        buy: function (pizza) {
            alert("Thank's for buying: ", pizza.name);
        }

    }

});