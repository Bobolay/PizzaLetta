// Get elements from local storage (LS)
var getDataFromLS = function () {
    var thisArray = [];
    var fetchArrayObject = localStorage.getItem('storageArray');
    if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
    }
    return thisArray;
};

pizzaApp.factory("cartService", [ '$rootScope', '$window', function($rootScope, $window){

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
            var existingArray = getDataFromLS();
            var existent_item = existingArray.find(function(matched){
                return matched.name === item.name;
            });
            if (existent_item) {
                existent_item.qnty += item.qnty;
                pizza_qnty += item.qnty;
                total_price += item.pricesmall * item.qnty;
            } else {
                existingArray.push(item);
                pizza_qnty += item.qnty;
                total_price += item.pricesmall * item.qnty;
            }
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // Decrease qnty
        decreaseData: function (item) {
            var existingArray = getDataFromLS();
            var existent_item = existingArray.find(function(matched){
                return matched.name === item.name;
            });
            if (existent_item.qnty == 1) {
                return;
            } else {
                existent_item.qnty--;
                total_price -= item.pricesmall;
                if (existent_item.hasOwnProperty('ingredients')){
                    pizza_qnty--;
                }
            }
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // Increase qnty
        increaseData: function (item) {
            var existingArray = getDataFromLS();
            var existent_item = existingArray.find(function(matched){
                return matched.name === item.name;
            });
            existent_item.qnty++;
            total_price += item.pricesmall;
            if (existent_item.hasOwnProperty('ingredients')){
                pizza_qnty++;
            }
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // Get items from LS
        getData: function () {
            var existingArray = getDataFromLS();
            var temp_qnty = 0;
            var temp_total = 0;
            angular.forEach(existingArray, function(value, key) {
                if (value.hasOwnProperty('ingredients')) {
                    temp_qnty += value.qnty;
                }
                temp_total += value.pricesmall * value.qnty;
            });
            pizza_qnty = temp_qnty;
            total_price = temp_total;
            return existingArray;
        },
        // Remove item from LS
        removeItem: function (item) {
            var existingArray = getDataFromLS();
            existingArray.splice(item,1);
            pizza_qnty -= item.qnty;
            total_price -= item.pricesmall * item.qnty;
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        }

    }

}]);