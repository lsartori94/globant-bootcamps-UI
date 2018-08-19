'use strict';

/**
 * @ngdoc function
 * @name listaCrudApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the listaCrudApp
 */
angular.module('listaCrudApp')
  .controller('NavCtrl', ['$scope', 'ThemeService', function ($scope, ThemeService) {
    console.log(ThemeService.getTheme());
    
  } ]);
