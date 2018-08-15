'use strict';

/**
 * @ngdoc overview
 * @name listaCrudApp
 * @description
 * # listaCrudApp
 *
 * Main module of the application.
 * 
 * 
 */
angular
  .module('listaCrudApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider, $locationProvider) {
    
    var toogleChoice = JSON.parse(localStorage.getItem('toogleChoice'));
    
    
    localStorage.setItem('toogleChoice', JSON.stringify(toogleChoice));
    
    
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
          
  });
  