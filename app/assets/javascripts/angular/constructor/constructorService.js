pizzaApp.factory("constructorService", function(cartService){

    // List of additional ingredients
    var constructor_ingredients = [];

    // Total price of construcred pizza
    var constructor_pizza_total = 100;

    return {

        getConstructorPizzaTotal: function(){
            return constructor_pizza_total;
        },

        decrease: function(ingredient){
            if (ingredient.qnty == 1 ) {
                return;
            } else {
                ingredient.qnty--;
                constructor_pizza_total -= ingredient.price;
            }
        },
        increase: function(ingredient){
            ingredient.qnty++;
            constructor_pizza_total += ingredient.price;
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
        getConstructorIngredients: function(){
            return constructor_ingredients;
        }
    }

});