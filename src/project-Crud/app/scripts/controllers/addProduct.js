'use strict';


angular.module('projectCrudApp')
  .controller('AddCtrl', function ($scope, productsService, $location) {
    productsService.getProducts().then(function(response){
      $scope.products = response;
      });
    $scope.add = function (name,desc,price) {
      var elem = {'name':name,'desc':desc,'price':price};
      $scope.products.push(elem);
      $location.path("#/");
    }
  });