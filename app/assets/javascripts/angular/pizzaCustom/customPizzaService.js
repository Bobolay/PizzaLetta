pizzaApp.factory("customPizzaService", function(cartService){

    // Choosed pizza for customization
    var custom_pizza = {};
    // Custom pizza ingredients only
    var custom_pizza_ingredients = [];
    // List of additional ingredients that we choose (with toggleIngredient)
    var custom_ingredients = [];

    var custom_pizza_total = 0;

    return {

        // Get pizza that we cant to customize
        getCustomPizza: function () {
            return custom_pizza;
        },

        // Return custom pizza ingredients only
        getCustomPizzaIngredients: function () {
            return custom_pizza_ingredients;
        },

        getCustomPizzaTotal: function(){
            return custom_pizza_total;
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
                    custom_pizza_total -= element.price;
                }
            }
        },
        increase: function(element){
            if (element.hasOwnProperty('ingredients')){
                element.qnty++;
            } else {
                element.qnty++;
                custom_pizza_total += element.price;
            }
        },
        // Adding choosen pizza to this service from PizzaCrtl
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
            custom_pizza_ingredients = pizza.ingredients.map(function(prop) {return prop.name;});
            console.log("Ingredients of custom pizza: ", custom_pizza_ingredients);
            custom_pizza_total = 0;
            custom_pizza_total += pizza.price * pizza.qnty;
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
                    // Removing ingredient price to custom pizza total price
                    custom_pizza_total -= ingredient.price;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                // Adding ingredient price to custom pizza total price
                custom_pizza_total += ingredient.price;
            }
        },

        // Return additional ingredients (it stores in separate array from all ingredients)
        getCustomIngredients: function(){
            return custom_ingredients;
        }
    }

});