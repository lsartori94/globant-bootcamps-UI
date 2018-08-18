'use strict';

/**
 * @ngdoc function
 * @name projectCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectCrudApp
 */
angular.module('projectCrudApp')
  .controller('EditCtrl', function ($scope, productsService, $location) {
    productsService.getProducts().then(function(response){
        $scope.products = response;
      });
    $scope.id = $location.search().id;
  });
