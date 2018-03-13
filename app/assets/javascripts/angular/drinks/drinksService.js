//   A L L   I T E M S   S E R V I C E

pizzaApp.factory("drinksService", function($http){

    //   ITEMS collection

    var drinks = [
        {
            imgUrl: "blueberry-lemonade-hero.png",
            name: "Грушевий лимонад з шалфеєм",
            category: "lemonad",
            category_ukr: "Лимонади",
            litre: "0.5",
            price: 33,
            qnty: 1
        },
        {
            imgUrl: "Test-drinks.png",
            name: "Мохіто безалкогольне",
            category: "non-alcohol",
            category_ukr: "Безалкогольні",
            litre: "0.7",
            price: 24,
            qnty: 1
        },
        {
            imgUrl: "Test-drinks.png",
            name: "Лимонний лимонад з лимоном",
            category: "alcohol",
            category_ukr: "Алкогольні",
            litre: "0.25",
            price: 26,
            qnty: 1
        },
        {
            imgUrl: "blueberry-lemonade-hero.png",
            name: "Мохіто алкогольне",
            category: "alcohol",
            category_ukr: "Алкогольні",
            litre: "0.45",
            price: 42,
            qnty: 1
        },
        {
            imgUrl: "coca-cola-flasche-png-29.png",
            name: "Кока-кола",
            category: "non-alcohol",
            category_ukr: "Безалкогольні",
            litre: "0.5",
            price: 10,
            qnty: 1
        },
        {
            imgUrl: "sprite.png",
            name: "Спрайт",
            category: "non-alcohol",
            category_ukr: "Безалкогольні",
            litre: "0.5",
            price: 10,
            qnty: 1
        },
        {
            imgUrl: "water_bottle_PNG10149.png",
            name: "Вода негазована",
            category: "non-alcohol",
            category_ukr: "Безалкогольні",
            litre: "0.5",
            price: 8,
            qnty: 1
        }
    ]

    //   Return all items from ITEMS collection
    return {
        getDrinks: function () {
            return drinks;
        }
    }
})