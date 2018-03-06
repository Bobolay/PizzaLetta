//   S E N D   O R D E R

// pizzaApp.controller("postController", function ($scope, $http) {

//     // create a blank object to handle form data.
//     $scope.message = {
//         "name": "Bob",
//         "age": 25
//     };
//     // calling our submit function.
//     $scope.submitForm = function() {
//         var url = 'structure_parts';
//         var data = {data: $scope.message};
//         var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
//         $http.get(url, data, headers)
//            .then(function(data) {
//                 console.log(data);  
//                 if (data.errors) {
//                     // Showing errors.
//                     $scope.errorContent = data.errors.errorContent;
//                 } else {
//                     $scope.message = data.message;
//                 }
//             });
//     };

// });