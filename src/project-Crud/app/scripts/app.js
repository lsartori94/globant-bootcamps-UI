'use strict';

/**
 * @ngdoc overview
 * @name projectCrudApp
 * @description
 * # projectCrudApp
 *
 * Main module of the application.
 */
angular
  .module('projectCrudApp', [
    'ngStorage',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider,$localStorageProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/editProduct', {
        templateUrl: 'views/editProduct.html',
        controller: "EditCtrl",
      })
      .when('/addProduct', {
        templateUrl: 'views/addProduct.html',
        controller: "AddCtrl",
      })
      .otherwise({
        redirectTo: '/'
      });
      if (!$localStorageProvider.get('theme')) {
        alert('primeravez');
        $localStorageProvider.set('theme', 'Ligth');
      }
      $locationProvider.hashPrefix('');
  });
