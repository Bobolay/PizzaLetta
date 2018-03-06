pizzaApp.factory("constructorService", function(){

    // Choosed pizza for customization
    var custom_pizza = {};

    // List of additional ingredients
    var custom_ingredients = [];

    return {

        getCustomPizza: function () {
            return custom_pizza;
        },

        decrease: function(ingredient){
            if (ingredient.qnty == 1 ) {
                return;
            } else {
                ingredient.qnty--;
            }
        },
        increase: function(ingredient){
            ingredient.qnty++;
        },

        // Add or remove ingredient from out custom pizza
        toggleIngredient: function(ingredient){
            var existent_ingredient = custom_ingredients.find(function(matched){
                return matched.name === ingredient.name;
            });
            if (existent_ingredient) {
                var target = custom_ingredients.indexOf(ingredient);
                if(target != -1) {
                    // We don't want eat this shit
                    custom_ingredients.splice(target, 1);
                    // So let's remove 'active' class by doing this
                    ingredient.active_ingredient = false;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
            }
        },

        // Get additional ingredients
        getCustomIngredients: function(){
            return custom_ingredients;
        }
    }

});