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

    // Total price of all items in cart
    var total_price = 0;
    // Quantity of pizza only
    var pizza_qnty = 0;

    // Additional sauce (red or white)
    // var additional_sauces = [];

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
                return matched.name === item.name && !item.hasOwnProperty('type') && matched.ingredients === item.ingredients;
            });
            if (existent_item) {
                existent_item.qnty += item.qnty;
            } else {
                existingArray.push(item);
            }
            // Increment pizza_qnty if we add pizza only (not drink or salad)
            if (item.hasOwnProperty('ingredients')){
                pizza_qnty += item.qnty;
            }
            // Increment total_price
            total_price += item.price * item.qnty;
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // Decrease qnty
        decreaseData: function (item) {
            var existingArray = getDataFromLS();
            var existent_item = existingArray.find(function(matched){
                return matched.name === item.name && matched.price === item.price;
            });
            if (existent_item.qnty == 1) {
                return;
            } else {
                existent_item.qnty--;
                total_price -= item.price;
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
                return matched.name === item.name && matched.price === item.price;
            });
            existent_item.qnty++;
            total_price += item.price;
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
                temp_total += value.price * value.qnty;
            });
            pizza_qnty = temp_qnty;
            total_price = temp_total;
            return existingArray;
        },
        // Remove item from LS
        removeItem: function (item) {
            var existingArray = getDataFromLS();

            // We are taking number of item that match object in array, but this crappy code not working =(
            // It works in ToggleIngredient function though.. Miracle of JS! =)

            // var itemToRemove = existingArray.indexOf(item);
            // if(itemToRemove != -1) {
            //     // We don't want eat this shit
            //     existingArray.splice(itemToRemove, 1);

            // Here we KOSTYL that make out beatiful code works!
            // Simply go through array and increment var kostyl untill we have match.
            // So that's will be out index of element we want to remove!
            var kostyl = 0;
            angular.forEach(existingArray, function (value, key) {
                if(value.name == item.name && value.price == item.price){
                    kostyl = existingArray.indexOf(value);
                }
            });
            existingArray.splice(kostyl,1);

            pizza_qnty -= item.qnty;
            total_price -= item.price * item.qnty;
            localStorage.setItem('storageArray',JSON.stringify(existingArray));
        },
        // getSauces: function () {
        //     return additional_sauces;
        // },
        // Add or remove ingredient from out custom pizza
        // toggleIngredient: function (ingredient) {
        //
        //     var existent_ingredient = additional_sauces.find(function(matched){
        //         return matched.name === ingredient.name;
        //     });
        //     if (existent_ingredient) {
        //         var target = additional_sauces.indexOf(ingredient)
        //         if(target != -1) {
        //             // We don't want eat this shit
        //             additional_sauces.splice(target, 1);
        //             // So let's remove 'active' class by doing this
        //             ingredient.active_ingredient = false;
        //         }
        //     } else {
        //         // This ingredient isn't choosen still - throw it into our pizza
        //         additional_sauces.push(ingredient);
        //         // Highlight this ingredient (it receives 'active' class)
        //         ingredient.active_ingredient = true;
        //     }
        // }

    }

}]);