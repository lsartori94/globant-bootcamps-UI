'use strict';

/**
 * @ngdoc function
 * @name listaCrudApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the listaCrudApp
 * agregar EDIT ELEMENTT  y DELETE ELEMENT
 * si puede ser con animations estaria deluxe
 *
      }beers = [{}];
 * ya funciona el addBeer
 * 
 * FUNCIONA MAL EL LOCAL STORAGE, SI NO DECLARO EL ARRAY VACIO NO ANDA.
 * Y SI NO HAGO LA LINEA 23 NO LEE LA LISTA DESPUES DE NAVEGAR. 
 * $scope.addBeer= ()=>$scope.beers.push({name: 'Cream Stout',brand: 'Antares',price: '$100',notes: ' Dark and soft beer'});
 */
angular.module('listaCrudApp')

  .controller('ListCtrl', ['$scope', 'ListService', function ($scope, ListService) {

    ListService.refresh();
    $scope.beers = ListService.getBeers();
    
    $scope.name = '';
    $scope.brand = '';
    $scope.price = '';
    $scope.notes = '';
    $scope.addBeer = function () {
      ListService.setBeers({ name: $scope.name, brand: $scope.brand, price: $scope.price, notes: $scope.notes });

    };
    $scope.delBeer= function(index){
      ListService.deleteBeer(index);
    };
    $scope.updBeer= function(index){
      ListService.editBeer(index);

    };
  }]);

