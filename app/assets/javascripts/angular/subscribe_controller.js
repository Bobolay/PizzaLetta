pizzaApp.controller("SubscribeCtrl", [ '$http', '$scope', function ($http, $scope) {

    $scope.submitCallForm = function () {

        var url = 'email';
        var data = {
            email: $scope.subscribe_email
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
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

}]);