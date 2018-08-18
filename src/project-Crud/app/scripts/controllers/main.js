'use strict';

/**
 * @ngdoc function
 * @name projectCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectCrudApp
 */
angular.module('projectCrudApp')
  .controller('MainCtrl', function ($scope, productsService) {
    productsService.getProducts().then(function(response){
      $scope.products = response;
    });
  });
