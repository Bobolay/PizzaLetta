// Functions to manage objects in Local Storage

// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// };
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// };


// Extended instruments for Local Storage

// Storage.prototype.getArray = function(arrayName) {
//     var thisArray = [];
//     var fetchArrayObject = this.getItem(arrayName);
//     if (typeof fetchArrayObject !== 'undefined') {
//         if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
//     }
//     console.log("Local storage: ",thisArray);
//     return thisArray;
// };

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

        setData: function(item) {
            window.localStorage.pushArrayItem('storageArray',item);
        },

        getData: function() {

            var thisArray = [];
            var fetchArrayObject = localStorage.getItem('storageArray');
            if (typeof fetchArrayObject !== 'undefined') {
                if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
            }
            console.log("Local storage: ",thisArray);
            return thisArray;

            // console.log('before Get');
            // return localStorage.getArray('storageArray');
        }

    }

}]);