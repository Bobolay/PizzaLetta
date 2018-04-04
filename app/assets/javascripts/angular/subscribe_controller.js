SubscribeCtrl.$inject = ['$http', '$scope'];

pizzaApp.controller('SubscribeCtrl', SubscribeCtrl);

function SubscribeCtrl($http, $scope){

    $scope.submitCallForm = function () {

        var url = 'email';
        var data = {
            email: $scope.subscribe_email
        };
        var config = {
            headers : {
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                'Content-Type': 'application/json'
            }
        };

        $http.post(url, data, config)
            .then(
                function(response){
                    $scope.message = data.message;
                    var success = angular.element(document.querySelector(".success-wrap"));
                    success.addClass('visible');
                },
                function(response){
                    // failure callback
                    console.log("Not working!");
                }
            );
    };

}