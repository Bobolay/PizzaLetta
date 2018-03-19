// Functions to manage objects in Local Storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

pizzaApp.factory("cartService", ['$window', function($window){

    var cart = [];
    var pizza_qnty = cart.length;

    return {

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
        },

        // Set item to local storage
        setData: function(item) {
            window.localStorage.setObj('custom_pizza', item);
            return this;
        },
        // Get items from local storage
        getData: function() {
            window.localStorage.getObj();
            return this;
        }

    }

}]);