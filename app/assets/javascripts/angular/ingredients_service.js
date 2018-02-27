//   I N G R E D I E N T S   S E R V I C E

pizzaApp.factory("ingredientsService", function(){

    //   Pizza ingredients list
    var ingredients = [
        {
            ingredient_category: "М'ясо",
            list: [
                {
                    name: "Шинка",
                    imgUrl: "Letta-ingr-ham.png",
                    price: "15",
                    qnty: 1
                },
                {
                    name: "Бекон",
                    imgUrl: "Letta-ingr-beacon.png",
                    price: "13",
                    qnty: 1
                },
                {
                    name: "Мисливські ковбаски",
                    imgUrl: "Letta-ingr-sosauge.png",
                    price: "12",
                    qnty: 1
                },
                {
                    name: "Салямі",
                    imgUrl: "Letta-ingr-Salaymi.png",
                    price: "14",
                    qnty: 1
                },
                {
                    name: "Курка печена",
                    imgUrl: "Letta-ingr-chiken.png",
                    price: "11",
                    qnty: 1
                }
            ]
        },
        {
            ingredient_category: "Морепродукти",
            list: [
                {
                    name: "Лосось",
                    imgUrl: "Letta-ingr-salomon.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Анчоуси",
                    imgUrl: "Letta-ingr-anchouses.png",
                    price: "19",
                    qnty: 1
                },
                {
                    name: "Креветки",
                    imgUrl: "Letta-ingr-Shromp.png",
                    price: "20",
                    qnty: 1
                }
            ]
        },
        {
            ingredient_category: "Сири",
            list: [
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Моцарела",
                    imgUrl: "Letta-ingr-motsarella.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Пепероні",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: 1
                }
            ]
        },
        {
            ingredient_category: "Овочі",
            list: [
                {
                    name: "Шампіньйони",
                    imgUrl: "Letta-ingr-champinion.png",
                    price: "25",
                    qnty: 1
                },
                {
                    name: "Помідори звичайні",
                    imgUrl: "Letta-ingr-tomato.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Помідори чері",
                    imgUrl: "Letta-ingr-tomato-cherri.png",
                    price: "24",
                    qnty: 1
                },
                {
                    name: "Перець солодкий",
                    imgUrl: "Letta-ingr-sweet-papper.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Перець гострий",
                    imgUrl: "Letta-ingr-chili-papper.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Цибуля",
                    imgUrl: "Letta-ingr-onion.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Зелень",
                    imgUrl: "Letta-ingr-green.png",
                    price: "22",
                    qnty: 1
                },
                {
                    name: "Оливки",
                    imgUrl: "Letta-ingr-olive.png",
                    price: "22",
                    qnty: 1
                }
            ]
        }
    ]
    //   Return pizza ingredients
    return {
        getIngredients: function () {
            return ingredients;
        }
    }
})