//   A L L   I T E M S   S E R V I C E

pizzaApp.factory("itemsService", [ '$q', '$http', function($q, $http){

    //   Return all items from ITEMS collection
    return {

        getPizzaList: function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: '/api/v1/pizzas.json'}).
            then(function success(response){
                deferred.resolve(response.data);
            }, function error(response){
                deferred.reject(response.status);
            });
            return deferred.promise;
        }
    }
}])