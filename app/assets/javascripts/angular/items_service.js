//   A L L   I T E M S   S E R V I C E

pizzaApp.factory("itemsService", function(){

    //   ITEMS collection
    var items = [
        {
            imgUrl: "hcmp84855_290760_s3.jpeg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                {
                    name: "Шампіньйони",
                    imgUrl: "Letta-ingr-champinion.png",
                    price: "25",
                    qnty: "1"
                },
                {
                    name: "Помідори звичайні",
                    imgUrl: "Letta-ingr-tomato.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Помідори чері",
                    imgUrl: "Letta-ingr-tomato-cherri.png",
                    price: "24",
                    qnty: "1"
                },
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Перець гострий",
                    imgUrl: "Letta-ingr-chili-papper.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Цибуля",
                    imgUrl: "Letta-ingr-onion.png",
                    price: "22",
                    qnty: "1"
                }
            ],
            price: "112",
            qnty: 1,
            discount: "134",
            bonus: {
                name: "Coca-cola",
                attribute: "0.3l"
            }
        },
        {
            imgUrl: "IMG_5753-1.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                {
                    name: "Шинка",
                    imgUrl: "Letta-ingr-ham.png",
                    price: "15",
                    qnty: "1"
                },
                {
                    name: "Мисливські ковбаски",
                    imgUrl: "Letta-ingr-sosauge.png",
                    price: "12",
                    qnty: "1"
                },
                {
                    name: "Лосось",
                    imgUrl: "Letta-ingr-salomon.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пепероні",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                }
            ],
            price: "87",
            qnty: 1
        },
        {
            imgUrl: "margharita1-600x480.jpeg",
            name: "Морська",
            category: "seafood",
            ingredients: [
                {
                    name: "Лосось",
                    imgUrl: "Letta-ingr-salomon.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Анчоуси",
                    imgUrl: "Letta-ingr-anchouses.png",
                    price: "19",
                    qnty: "1"
                },
                {
                    name: "Перець солодкий",
                    imgUrl: "Letta-ingr-sweet-papper.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Перець гострий",
                    imgUrl: "Letta-ingr-chili-papper.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пепероні",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                }
            ],
            price: "105",
            qnty: 1
        },
        {
            imgUrl: "piza400x300.jpg",
            name: "Сирна",
            category: "cheese",
            ingredients: [
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Моцарела",
                    imgUrl: "Letta-ingr-motsarella.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пепероні",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Зелень",
                    imgUrl: "Letta-ingr-green.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Оливки",
                    imgUrl: "Letta-ingr-olive.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Помідори чері",
                    imgUrl: "Letta-ingr-tomato-cherri.png",
                    price: "24",
                    qnty: "1"
                },
            ],
            price: "100",
            qnty: 1
        },
        {
            imgUrl: "IMG_5753-1.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                {
                    name: "Шинка",
                    imgUrl: "Letta-ingr-ham.png",
                    price: "15",
                    qnty: "1"
                },
                {
                    name: "Мисливські ковбаски",
                    imgUrl: "Letta-ingr-sosauge.png",
                    price: "12",
                    qnty: "1"
                },
                {
                    name: "Лосось",
                    imgUrl: "Letta-ingr-salomon.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Пепероні",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                }
            ],
            price: "87",
            qnty: 1
        },
        {
            imgUrl: "hcmp84855_290760_s3.jpeg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                {
                    name: "Шампіньйони",
                    imgUrl: "Letta-ingr-champinion.png",
                    price: "25",
                    qnty: "1"
                },
                {
                    name: "Помідори звичайні",
                    imgUrl: "Letta-ingr-tomato.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Помідори чері",
                    imgUrl: "Letta-ingr-tomato-cherri.png",
                    price: "24",
                    qnty: "1"
                },
                {
                    name: "Пармезан",
                    imgUrl: "Letta-ingr-parmesan.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Перець гострий",
                    imgUrl: "Letta-ingr-chili-papper.png",
                    price: "22",
                    qnty: "1"
                },
                {
                    name: "Цибуля",
                    imgUrl: "Letta-ingr-onion.png",
                    price: "22",
                    qnty: "1"
                }
            ],
            price: "112",
            qnty: 1,
            discount: "134",
            bonus: {
                name: "Coca-cola",
                attribute: "0.3l"
            }
        }
    ]
    //   Return all items from ITEMS collection
    return {
        getPizzaItems: function () {
            return items;
        }
    }
})