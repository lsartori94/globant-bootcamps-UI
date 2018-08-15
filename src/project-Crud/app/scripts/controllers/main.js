'use strict';

/**
 * @ngdoc function
 * @name projectCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectCrudApp
 */
var app = angular.module('projectCrudApp',[]);

  app.controller('MainCtrl',function($scope, $http) {
    $http({
      method: 'get',
      url: 'app/products.json'
    }).then(function (response) {
      alert('yes'); 
      data = response.data;
      $scope.products = data;
    },function(error){
      alert(error);
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })