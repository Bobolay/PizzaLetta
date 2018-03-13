pizzaApp.factory("constructorService", function(cartService, $http, $q){

    // List of additional ingredients
    var constructor_ingredients = [];

    var constructor_pizza_total = 0;

    return {

        getConstructorBase: function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: 'http://localhost:3000/api/v1/constructor.json'}).
            then(function success(response){
                deferred.resolve(response.data);
            }, function error(response){
                deferred.reject(response.status);
            });
            return deferred.promise;
        },

        setBasePrice: function (value) {
            constructor_pizza_total = value.price_small;
        },

        getConstructorPizzaTotal: function(){
            return constructor_pizza_total;
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
        },
        
    }

});