'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    //products examples
    $scope.products = [{
      name: "Rolex watch men",
      description: "Luxury watch.",
      price: "$25000"
    }, {
      name: "Bristol shoes men",
      description: "Awesome shoes. Seen in movies",
      price: "$999"
    }, {
      name: "Wallet men",
      description: "You can absolutely use this one!",
      price: "$799"
    }];

    //clean modal form before enter to it
    $scope.cleanCreateForm = function () {
      $scope.addName = undefined;
      $scope.addDesc = undefined;
      $scope.addPrice = undefined; 
      $scope.modal = "modal";
      $scope.errorName = "";    
      $scope.errorDesc = "";
      $scope.errorPrice = "";
      $scope.warnName = "";
      $scope.warnDesc = "";
      $scope.warnPrice = "";
    }

    //create product and validations
    $scope.addProduct = function () {    
      $scope.errorName = "";
      $scope.errorDesc = "";
      $scope.errorPrice = "";      
      $scope.warnName = "";
      $scope.warnDesc = "";
      $scope.warnPrice = "";
      if ($scope.addName == undefined || $scope.addPrice == undefined || $scope.addDesc == undefined) {
        if ($scope.addName == undefined) {
          $scope.errorName = "Please fill out this field!";
          $scope.warnName = "has-error has-feedback";
        }       
        if ($scope.addDesc == undefined) {
          $scope.errorDesc = "Please fill out this field!";
          $scope.warnDesc = "has-error has-feedback";
        }
        if ($scope.addPrice == undefined) {
          $scope.errorPrice = "Please fill out this field";
          $scope.warnPrice = "has-error has-feedback";
        }
        $scope.modal = "";        
      }
      else {
        $scope.products.push({ 
          name: $scope.addName, 
          description: $scope.addDesc, 
          price: "$"+$scope.addPrice 
        });
        $scope.modal = "modal";
      }                      
    }

    //current product id
    $scope.changeId = function(id) {
      $scope.indexId = id;
    }

    //delete product
    $scope.remove = function() { 
      $scope.products.splice($scope.indexId, 1);     
    }

    //update product & validations
    $scope.editProduct = function () {
      $scope.errorName = "";
      $scope.errorDesc = "";
      $scope.errorPrice = "";      
      $scope.warnName = "";
      $scope.warnDesc = "";
      $scope.warnPrice = "";
      if ($scope.addName == "" || $scope.addPrice == "" || $scope.addDesc == "") {
        if ($scope.addName == "") {
          $scope.errorName = "Please fill out this field!";
          $scope.warnName = "has-error has-feedback";
        }       
        if ($scope.addDesc == "") {
          $scope.errorDesc = "Please fill out this field!";
          $scope.warnDesc = "has-error has-feedback";
        }
        if ($scope.addPrice == "") {
          $scope.errorPrice = "Please fill out this field";
          $scope.warnPrice = "has-error has-feedback";
        }
        $scope.modal = "";        
      }
      else{
        $scope.products[$scope.indexId] = {
          name: $scope.addName, 
          description: $scope.addDesc, 
          price: "$"+$scope.addPrice
        };
        $scope.addName = "";
        $scope.addDesc = "";
        $scope.addPrice = "";
        $scope.modal = "modal"; 
      }      
    }

    //cleans and pass current product data to modal form
    $scope.setUpdateForm = function (product) {
      $scope.addName = product.name;
      $scope.addDesc = product.description;
      $scope.addPrice = product.price.substr(1);
      $scope.modal = "modal";
      $scope.errorName = "";    
      $scope.errorDesc = "";
      $scope.errorPrice = "";
      $scope.warnName = "";
      $scope.warnDesc = "";
      $scope.warnPrice = "";
    }

    //cleans and pass current product data to modal form
    $scope.readForm = function (product) {
      $scope.readName = product.name;
      $scope.readDesc = product.description;
      $scope.readPrice = product.price;
    }

    //set last theme
    $timeout(function(){
      var light = localStorage.getItem('light');
    if (light == "false") { 
      var heading =angular.element('#heading');
      for (let i = 0; i < $scope.products.length; i++) {
        var list =angular.element('#list'+i);
        list.attr('style', 'background-color: darkgray;');
      }     
      heading.attr('style', 'background-color: darkred;');      
      localStorage.setItem('light', "false");
    }
    }, 0);    

    //change theme
    $scope.changeTheme = function () {  
      var heading =angular.element('#heading');
      var light = localStorage.getItem('light');
      if (light == "true") {        
        heading.attr('style', 'background-color: darkred;');
        for (let i = 0; i < $scope.products.length; i++) {
          var list =angular.element('#list'+i);
          list.attr('style', 'background-color: darkgray;');
        }
        localStorage.setItem('light', "false");
      }
      else {
        heading.attr('style', '');
        for (let i = 0; i < $scope.products.length; i++) {
          var list =angular.element('#list'+i);
          list.attr('style', '');
        }
        localStorage.setItem('light', "true");
      }
    }

  });

  //Acomodar vista y aplicar float button.
