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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
