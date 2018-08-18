'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('MainCtrl', function ($scope) {

    $scope.products = [{
      name: "02",
      description: "Albacete",
      price: "$1000"
    }, {
      name: "03",
      description: "Alicante/Alacant",
      price: "$200"
    }, {
      name: "04",
      description: "Almería",
      price: "$400"
    }];

    $scope.addProduct = function () {
      $scope.products.push({ 
        name: $scope.addName, 
        description: $scope.addDesc, 
        price: "$"+$scope.addPrice 
      });
      $scope.addName = "";
      $scope.addDesc = "";
      $scope.addPrice = "";
    }

    $scope.changeId = function(id) {
      $scope.indexId = id;
    }

    $scope.remove = function() { 
      $scope.products.splice($scope.indexId, 1);     
    }

    $scope.editProduct = function () {
      $scope.products[$scope.indexId] = {
        name: $scope.addName, 
        description: $scope.addDesc, 
        price: "$"+$scope.addPrice
      };
      $scope.addName = "";
      $scope.addDesc = "";
      $scope.addPrice = "";
    }

    $scope.updateForm = function (product) {
      $scope.addName = product.name;
      $scope.addDesc = product.description;
      $scope.addPrice = product.price.substr(1);
    }
    
  });

  //agregar iconos a los botones, ver validaciones y local storage. Acomodar vista y aplicar float button.
