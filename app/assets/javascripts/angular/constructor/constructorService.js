pizzaApp.factory("constructorService", [ '$window', 'cartService', '$http', '$q', function($window, cartService, $http, $q){

    // List of additional ingredients
    var constructor_ingredients = [];

    var constructor_pizza_total = 0;

    // function getConstructorBase () {
    //     var deferred = $q.defer();
    //     $http({method: 'GET', url: '/api/v1/constructor.json'}).
    //     then(function success(response){
    //         deferred.resolve(response.data);
    //     }, function error(response){
    //         deferred.reject(response.status);
    //     });
    //     var promiseObj = deferred.promise;
    //     promiseObj.then(function(value) {
    //         constructed_pizza = value;
    //         // console.log("Base for constructor: ",constructed_pizza);
    //     });
    // });

    return {

        // Get basic data of constructor pizza
        getConstructorBase: function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: '/api/v1/constructor.json'}).
            then(function success(response){
                deferred.resolve(response.data);
            }, function error(response){
                deferred.reject(response.status);
            });
            constructor_pizza = deferred.promise;
            return deferred.promise;
        },

        setBasePrice: function (value) {
            constructor_pizza_total = value.price_small;
        },

        // Get / update pizza total
        getConstructorPizzaTotal: function(){
            return constructor_pizza_total;
        },

        // Reset total
        resetConstructorPizzaTotal: function () {
            return constructor_pizza_total = 0;
        },

        // Reset constructor ingredient
        resetConstructorIngredients: function () {
            return constructor_ingredients = [];
        },

        // Decrease / increase qnty of ingredient
        decrease: function(element){
            if (element.qnty == 1 ) {
                return;
            } else {
                if (element.hasOwnProperty('ingredients')){
                    element.qnty--;
                } else {
                    element.qnty--;
                    constructor_pizza_total -= element.price;
                }
            }
        },
        increase: function (element) {
            if (element.hasOwnProperty('ingredients')){
                element.qnty++;
            } else {
                element.qnty++;
                constructor_pizza_total += element.price;
            }
        },

        // Add or remove ingredient from out custom pizza
        toggleIngredient: function(ingredient){

            var existent_ingredient = constructor_ingredients.find(function(matched){
                return matched.name === ingredient.name;
            });
            if (existent_ingredient) {
                var target = constructor_ingredients.indexOf(ingredient);
                if(target != -1) {
                    // We don't want eat this shit
                    constructor_ingredients.splice(target, 1);
                    // So let's remove 'active' class by doing this
                    ingredient.active_ingredient = false;
                    // Removing ingredient price to custom pizza total price
                    constructor_pizza_total -= ingredient.price;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                constructor_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                // Adding ingredient price to custom pizza total price
                constructor_pizza_total += ingredient.price;
            }
        },

        // Get additional ingredients
        getConstructorIngredients: function () {
            return constructor_ingredients;
        }
        
    }

}]);