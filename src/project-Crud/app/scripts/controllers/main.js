'use strict';


angular.module('projectCrudApp')
  .controller('MainCtrl', function ($scope, productsService) {
    productsService.getProducts().then(function(response){
      $scope.products = response;
    });
    $scope.deleteProduct = function(id) {
      if(confirm("Are you sure?")){
        $scope.products.splice(id,1);
      }
    }
  });
