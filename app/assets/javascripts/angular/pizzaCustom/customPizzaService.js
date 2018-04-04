pizzaApp.factory("customPizzaService", function(cartService){

    // Choosed pizza for customization
    var custom_pizza = {};
    // Custom pizza + custom ingredients that goes into cart
    var custom_pizza_for_cart = {};
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

        createCustomPizza: function () {
            for (var key in custom_pizza){
                custom_pizza_for_cart[key] = custom_pizza[key];
            }
            var joint_ingredients = custom_pizza_for_cart.ingredients.concat(custom_ingredients);
            custom_pizza_for_cart.ingredients = joint_ingredients;
            custom_pizza_for_cart['price'] = custom_pizza_total;
            return custom_pizza_for_cart;
        },

        getCustomPizzaTotal: function () {
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
        increase: function (element) {
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
                custom_pizza.type = "Особлива";
                custom_pizza.special = true;
                custom_pizza.imgUrl = pizza.imgUrl;
                custom_pizza.name = pizza.name;
                custom_pizza.qnty = pizza.qnty;
                custom_pizza.ingredients = pizza.ingredients;
                custom_pizza.price = pizza.pricesmall;
            } else {
                return false;
            }
            // Create arr from ingredients of custom pizza
            custom_pizza_ingredients = pizza.ingredients.map(function(prop) {return prop.name;});
            // console.log("Ingredients of custom pizza: ", custom_pizza_ingredients);
            custom_pizza_total = 0;
            custom_pizza_total += pizza.pricesmall * pizza.qnty;
        },

        // Add or remove ingredient from out custom pizza
        toggleIngredient: function (ingredient) {

            var existent_ingredient = custom_ingredients.find(function(matched){
                return matched.name === ingredient.name;
            });
            if (existent_ingredient) {
                var target = custom_ingredients.indexOf(ingredient)
                if(target != -1) {
                    // We don't want eat this shit
                    custom_ingredients.splice(target, 1);
                    // So let's remove 'active' class by doing this
                    ingredient.active_ingredient = false;
                    // Removing ingredient price to custom pizza total price
                    custom_pizza_total -= ingredient.price * ingredient.qnty;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                // Adding ingredient price to custom pizza total price
                custom_pizza_total += ingredient.price * ingredient.qnty;
            }
        },

        // Return additional ingredients (it stores in separate array from all ingredients)
        getCustomIngredients: function () {
            return custom_ingredients;
        },

        // Clear additional ingredients list when we choose another pizza for customization
        resetIngredients: function () {
            return custom_ingredients = [];
        }

    }

});