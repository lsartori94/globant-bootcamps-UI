'use strict';

/**
 * @ngdoc function
 * @name listaCrudApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the listaCrudApp
  */
angular.module('listaCrudApp')

  .controller('ListCtrl', ['$scope', 'ListService', function ($scope, ListService) {
    
    ListService.refresh();
    $scope.beers = ListService.getBeers();
    $scope.row= '';
    //prepara el modal hibrido para hacerlo un creador
    $scope.addTitle = function () {
      $('.hybrid').html('Create');
      $('.modal-title').html('Add New Beer');
      $scope.name = '';
      $scope.brand = '';
      $scope.price = '';
      $scope.notes = '';
    };
    $scope.addBeer = function () {

      ListService.setBeers({ name: $scope.name, brand: $scope.brand, price: $scope.price, notes: $scope.notes });

    };
    $scope.delBeer = function (index) {
      ListService.deleteBeer(index);
    };
    //prepara el modal hibrido para hacerlo un editor
    $scope.updBeer = function (index) {
      $('.modal-title').html('Edit Beer');
      $('.hybrid').html('Update');
      $scope.name = $scope.beers[index].name;
      $scope.brand = $scope.beers[index].brand;
      $scope.price = $scope.beers[index].price;
      $scope.notes = $scope.beers[index].notes;
      $scope.row= index;
    };
    //controla el click hibrido 
    $scope.hybridClick = function () {

      console.log($('.hybrid').html());
      
      if (($('.hybrid').html()) === 'Create') {
        this.addBeer();
      } else {
        this.editer($scope.row);
      }

    };
    $scope.editer = function (row) {
      ListService.editBeer(row, [$scope.name, $scope.brand, $scope.price, $scope.notes]);
    };
  }]);

