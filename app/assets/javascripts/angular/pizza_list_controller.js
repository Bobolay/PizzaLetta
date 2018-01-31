pizzaApp.controller("PizzaListCtrl", function ($scope) {

    $scope.pizza_list = [
        {
            imgUrl: "hcmp84855_290760_s3.jpeg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                "constructor",
                "lemon",
                "pomidor",
                "leg",
                "hand"
            ],
            price: "121",
            discount: "134"
        },
        {
            imgUrl: "IMG_5753-1.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                "ogirok",
                "pomidor",
                "hand",
                "soys"
            ],
            price: "87"
        },
        {
            imgUrl: "margharita1-600x480.jpeg",
            name: "Морська",
            category: "seafood",
            ingredients: [
                "mayonez",
                "vogirok",
                "oluvka",
                "pizza"
            ],
            price: "105"
        },
        {
            imgUrl: "piza400x300.jpg",
            name: "Сирна",
            category: "cheese",
            ingredients: [
                "ananas",
                "bananas",
                "klubnika",
                "kyriatyna"
            ],
            price: "100"
        },
        {
            imgUrl: "pizza-saucisse-piquante-2301.jpg",
            name: "М'ясна",
            category: "meat",
            ingredients: [
                "olyvka",
                "pomidor",
                "sauce",
            ],
            price: "96"
        },
        {
            imgUrl: "small-1.jpg",
            name: "Вегетаріанська",
            category: "vegetarian",
            ingredients: [
                "lemon",
                "ananas",
                "pomidor",
                "oluvka",
                "pizza"
            ],
            price: "88"
        }
    ]

});