var pizzaApp = angular.module('pizzaApp', ['ngMask', 'ui.timepicker']);

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