var pizzaApp = angular.module('pizzaApp', ['ngMask', 'ui.timepicker']);


// $(document).on('turbolinks:load', ready)
// function ready() {
//     angular.bootstrap(document.body, ['pizzaApp']);
// }










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