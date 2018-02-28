var pizzaApp = angular.module('pizzaApp', ['ngRoute']);
pizzaApp.value('cart', {
    total: 0
});