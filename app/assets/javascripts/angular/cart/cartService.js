pizzaApp.factory("cartService", [ '$rootScope', '$window', function($rootScope, $window){

    var cart = [];

    var total_price = 0;
    var pizza_qnty = 0;

    return {

        getTotalPrice: function () {
            return total_price;
        },
        getPizzaQnty: function () {
            return pizza_qnty;
        },
        // Add item lo LS
        setData: function (item) {
            var thisArray = [];
            var fetchArrayObject = localStorage.getItem('storageArray');
            if (typeof fetchArrayObject !== 'undefined') {
                if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
            }
            var existingArray = thisArray;
            var existent_item = existingArray.find(function(matched){
                return matched.name === item.name;
            });
            if (existent_item) {
                existent_item.qnty += item.qnty;
                pizza_qnty += item.qnty;
            } else {
                existingArray.push(item);
                pizza_qnty += item.qnty;
            }
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // Get items from LS
        getData: function () {
            var thisArray = [];
            var fetchArrayObject = localStorage.getItem('storageArray');
            if (typeof fetchArrayObject !== 'undefined') {
                if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
            }
            var temp_qnty = 0;
            angular.forEach(thisArray, function(value, key) {
                if (value.hasOwnProperty('ingredients')) {
                    temp_qnty += value.qnty;
                }
            });
            pizza_qnty = temp_qnty;
            return thisArray;
        },
        // Remove item from LS
        removeItem: function (item) {
            var thisArray = [];
            var fetchArrayObject = localStorage.getItem('storageArray');
            if (typeof fetchArrayObject !== 'undefined') {
                if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
            }
            thisArray.splice(item,1);
            pizza_qnty -= item.qnty;
            localStorage.setItem('storageArray',JSON.stringify(thisArray));
        }

    }

}]);