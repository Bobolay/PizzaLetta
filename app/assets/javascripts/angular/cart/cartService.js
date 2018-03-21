// Functions to manage objects in Local Storage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};


// Extended instruments for Local Storage

Storage.prototype.getArray = function(arrayName) {
    var thisArray = [];
    var fetchArrayObject = this.getItem(arrayName);
    if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
    }
    console.log(thisArray);
    return thisArray;
};

Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
    var existingArray = this.getArray(arrayName);
    existingArray.push(arrayItem);
    this.setItem(arrayName,JSON.stringify(existingArray));
};

Storage.prototype.deleteArray = function(arrayName) {
    this.removeItem(arrayName);
};



pizzaApp.factory("cartService", [ '$rootScope', '$window', function($rootScope, $window){

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
        // setData: function(item) {
        //     window.localStorage.setObj('cartItem', item);
        //     console.log(item);
        //     return item;
        // },
        // Get items from local storage
        // getData: function() {
        //
        //     for (var i = 0, length = localStorage.length; i < length; ++i) {
        //       console.log(localStorage.getObj(localStorage.key(i)));
        //     }
        //     console.log('works');
        //     // window.localStorage.getObj();
        //     return this;
        // }

        setData: function(item) {
            window.localStorage.pushArrayItem('storageArray',item);
        },

        getData: function() {
            window.localStorage.getArray('storageArray');
        }

    }

}]);