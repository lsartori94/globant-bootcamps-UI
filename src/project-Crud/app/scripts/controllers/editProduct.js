'use strict';


angular.module('projectCrudApp')
  .controller('EditCtrl', function ($scope, productsService, $location) {
    productsService.getProducts().then(function(response){
      $scope.products = response;
      $scope.copyProducts = angular.copy($scope.products);
    });
    $scope.id = $location.search().id;
    $scope.edit = function (name,desc,price) {
      $scope.products[$scope.id].name = name;
      $scope.products[$scope.id].desc = desc;
      $scope.products[$scope.id].price = price;
      $location.path("#/");
    }
  });
