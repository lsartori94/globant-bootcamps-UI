'use strict';

angular
  .module('projectCrudApp')
.service('productsService',function($http, $q){
    var cache;
    this.getProducts = function(){
        var deferred = $q.defer();
        if(cache) {
            deferred.resolve(cache);
        } else {   
            $http({
                method: 'get',
                url: '../resources/products.json'
            }).then(function (response) { 
                cache = response.data;
                deferred.resolve(cache);
            },function(){
                alert(error);
                deferred.reject(cache);
            }); 
        };
        return deferred.promise;
    };
  })