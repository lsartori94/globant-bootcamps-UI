'use strict';

/**
 * @ngdoc function
 * @name projectCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectCrudApp
 */
angular.module('projectCrudApp')
  .controller('EditCtrl', function ($scope, $http, $location) {
    $http({
      method: 'get',
      url: '../products.json'
    }).then(function (response) { 
      $scope.products = response.data;
      $scope.id = $location.search().id;
    },function(error){
      alert(error);
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
