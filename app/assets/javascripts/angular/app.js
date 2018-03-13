var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.directive('mixitup',function(){
    var linker = function(scope,element,attrs) {
        scope.$watch('entities', function(){

            console.log('reload');
            element.mixItUp();
            // how to tell mixitup to reload the data
        });

        console.log('starting')

    };

    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
})