pizzaApp.factory("customPizzaService", function(){

    // List of all ingredients
    var custom_ingredients = [];

    // Choosed pizza for customization
    var custom_pizza = {};
    // var pizza_price = 0;
    // var custom_pizza_ingredients = [];
    var qwerty = 0;

    return {
        getCustomPizza: function () {
            return custom_pizza;
        },
        decrease: function(ingredient){
            if (ingredient.qnty == 1 ) {
                return;
            } else {
                ingredient.qnty--;
                qwerty -= ingredient.price;
                console.log(qwerty);
                // $scope.ingPrice = $scope.ingPrice - ingredient.price;
            }
        },
        increase: function(ingredient){
            ingredient.qnty++;
            qwerty += ingredient.price;
            console.log(qwerty);
        },
        getTotal: function(){
            return qwerty;
        },
        // getCustomPizzaIngredients: function () {
        //     return custom_pizza_ingredients;
        // },
        addCustomPizza: function (pizza) {
            if (typeof pizza === 'object') {
                custom_pizza.imgUrl = pizza.imgUrl;
                custom_pizza.name = pizza.name;
                custom_pizza.qnty = pizza.qnty;
                custom_pizza.ingredients = pizza.ingredients;
                custom_pizza.price = pizza.price;
                // pizza_price = pizza.price;
                // console.log(pizza_price);
            } else {
                return false;
            }
            custom_pizza_ingredients = pizza.ingredients.map(function(prop) {return prop.name;});
            console.log("Ingredients of custom pizza: ", custom_pizza_ingredients);
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
                    qwerty -= ingredient.price;
                }
            } else {
                // This ingredient isn't choosen still - throw it into our pizza
                custom_ingredients.push(ingredient);
                // Highlight this ingredient (it receives 'active' class)
                ingredient.active_ingredient = true;
                qwerty += ingredient.price;
            }
        },
        getCustomIngredients: function(){
            return custom_ingredients;
        }

    }

});