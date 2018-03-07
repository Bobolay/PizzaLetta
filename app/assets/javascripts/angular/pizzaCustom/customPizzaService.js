pizzaApp.factory("customPizzaService", function(cartService){

    // Choosed pizza for customization
    var custom_pizza = {};
    // Custom pizza ingredients only
    var custom_pizza_ingredients = [];
    console.log(cartService.total);
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
                cartService.total -= ingredient.price;
            }
        },
        increase: function(ingredient){
            ingredient.qnty++;
            cartService.total += ingredient.price;
        },

        // Return custom pizza ingredients only
        getCustomPizzaIngredients: function () {
            return custom_pizza_ingredients;
        },

        addCustomPizza: function (pizza) {
            if (typeof pizza === 'object') {
                custom_pizza.imgUrl = pizza.imgUrl;
                custom_pizza.name = pizza.name;
                custom_pizza.qnty = pizza.qnty;
                custom_pizza.ingredients = pizza.ingredients;
                custom_pizza.price = pizza.price;
            } else {
                return false;
            }
            // Create arr from ingredients of custom pizza
            cartService.total += pizza.price;
            custom_pizza_ingredients = pizza.ingredients.map(function(prop) {return prop.name;});
            console.log("Ingredients of custom pizza: ", custom_pizza_ingredients);
        },

        getCustomPizza: function(){
            return custom_pizza;
        },

        // Add or remove ingredient from out custom pizza
        toggleIngredient: function(ingredient){

            var existent_ingredient = custom_ingredients.find(function(matched){
                return matched.name === ingredient.name;
            });
            if (existent_ingredient) {
                var target = custom_ingredients.indexOf(ingredient);
                if(target != -1) {
                    cartService.total -= ingredient.price;

                    // We don't want eat this shit
                    custom_ingredients.splice(target, 1);
                    // So let's remove 'active' class by doing this
                    ingredient.active_ingredient = false;
                }
            } else {
                console.log(custom_ingredients);
                cartService.total += ingredient.price;
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                console.log(custom_ingredients);

            }
        },

        // Get additional ingredients
        getCustomIngredients: function(){
            return custom_ingredients;
        }
    }

});