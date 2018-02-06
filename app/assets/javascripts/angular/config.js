// pizzaApp.config(function($routeProvider){
//
//     $routeProvider.when('/',
//         {
//             templateUrl:'../pages/index.html.slim'
//         });
//     $routeProvider.when('/question',
//         {
//             templateUrl:'views/question.html',
//             controller:'QuestionController'
//         });
//     $routeProvider.when('/answer',
//         {
//             templateUrl:'views/answer.html',
//             controller:'AnswerController'
//         });
//     $routeProvider.when('/question',
//         {
//             templateUrl:'views/question.html',
//             controller:'QuestionController'
//         });
//     $routeProvider.when('/answer',
//         {
//             templateUrl:'views/answer.html',
//             controller:'AnswerController'
//         });
//     $routeProvider.otherwise({redirectTo: '/question'});
//
// });


// pizzaApp.config(['$locationProvider', '$routeProvider',
//     function config($locationProvider, $routeProvider) {
//         $locationProvider.hashPrefix('');
//         $routeProvider.
//         when('/', {
//             template: '../pages/index.html.slim'
//         }).
//         otherwise('/');
//     }
// ]);


angular.
module('pizzaApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
            template: 'pages/index.html.slim'
        }).
        otherwise('/');
    }
]);