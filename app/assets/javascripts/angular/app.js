var pizzaApp = angular.module('pizzaApp', ['ngMask', 'ui.timepicker']);


// $(document).on('ready page:load', function() {
//     angular.bootstrap(document.body, ['pizzaApp'])
// });

// $(document).on "turbolinks:load", ->

pizzaApp.directive('mixitup',function(){
    var linker = function(scope,element,attrs) {
        scope.$watch('entities', function(){
            element.mixItUp();
        });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
})

// $(document).on('turbolinks:load', ready)
// function ready() {
//     //your code here
// }