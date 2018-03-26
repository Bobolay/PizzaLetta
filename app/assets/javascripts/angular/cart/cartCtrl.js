pizzaApp.controller("CartCtrl", [ '$http', '$window', '$rootScope', '$scope', 'cartService', function ($http, $window, $rootScope, $scope, cartService) {

    // $scope.$watch('cartService.getData()', function(newVal) {
    //     // console.log("New Data: " , newVal);
    //     $scope.cart = newVal;
    // });

    $scope.cart = cartService.getData();
    $scope.total_price = cartService.getTotalPrice();

    angular.element(document).ready(function () {
        $scope.total_price = cartService.getData();
        $scope.total_price = cartService.getTotalPrice();
    });

    $rootScope.$on('addPizza', function ($event) {
        $scope.total_price = cartService.getTotalPrice();
    });

    // Items list in cart
    $rootScope.$on('addPizza', function($event) {
        $scope.cart = cartService.getData();
    });

    // Additional sauces as option (red and white)
    // $scope.additional_sauces = cartService.getSauces();

    //   Decrease/increase quantity in cart only
    $scope.decrease = function(item){
        if (item.qnty == 1 ) {
            return;
        } else {
            cartService.decreaseData(item);
        }
        $rootScope.$emit('addPizza');
    };
    $scope.increase = function(item){
        cartService.increaseData(item);
        $rootScope.$emit('addPizza');
    };

    // Remove item from cart
    $scope.removeItem = function(item) {
        cartService.removeItem(item);
        $scope.cart = cartService.getData();
        $rootScope.$emit('addPizza');
    };

    // Add or remove optional sauce (red or white)
    $scope.toggleIngredient = function (ingredient) {
        cartService.toggleIngredient(ingredient);
    };

    // create a blank object to handle form data.
    $scope.message = {
        "name": "Bob",
        "age": 25
    };
    // calling our submit function.
    $scope.submitForm = function() {
        var url = 'structure_parts';
        var data = {data: $scope.cart};
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        $http.get(url, data, headers)
           .then(function(data) {
                console.log(data);
                if (data.errors) {
                    // Showing errors.
                    $scope.errorContent = data.errors.errorContent;
                } else {
                    $scope.message = data.message;
                }
           });
    };



}]);