angular.
module('pizzaApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
            template: 'pages/index.html.slim'
        }).
        when('/drinks', {
            template: 'pages/drinks.html.slim',
            title: 'Drinks'
        }).
        otherwise('/');
    }
]);