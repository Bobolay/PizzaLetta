SaladsCtrl.$inject = ['$rootScope', '$scope', 'cartService', '$http'];

pizzaApp.controller('SaladsCtrl', SaladsCtrl);

function SaladsCtrl($rootScope, $scope, cartService, $http){

    $scope.ready = false;

    // Get salads list
    $http({method: 'GET', url: '/api/v1/salats.json'}).
    then(function success(response) {
        $scope.salads = response.data;
        $scope.ready = true;
    });

    // Decrease/increase quantity in items list only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            item.qnty--;
        }
    };
    $scope.increase = function(item){
        item.qnty++;
    };

    // Add drink to cart
    $scope.AddToCart = function (salad) {
        var salad_to_cart = {};
        for (key in salad) {
            salad_to_cart[key] = salad[key];
        }
        cartService.setData(salad_to_cart);
        $rootScope.$emit('addPizza');
        salad.qnty = 1;

        var success = $(event.target).parent().find('.success-message');
        success.addClass('visible');
        setTimeout(function() {
            success.removeClass('visible');
        }, 1500);
    };

}