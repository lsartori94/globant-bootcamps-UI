'use strict';

/**
 * @ngdoc function
 * @name appNameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appNameApp
 */
angular.module('appNameApp')
.controller("listCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.addMe) {return;}
      if ($scope.products.indexOf($scope.addMe) == -1) {
          $scope.products.push($scope.addMe);
      } else {
          $scope.errortext = "The item is already in your shopping list.";
      }
  }
  $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.products.splice(x, 1);
  } 
});



  