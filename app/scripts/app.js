'use strict';

/**
 * @ngdoc overview
 * @name libPdfbooksApp
 * @description
 * # libPdfbooksApp
 *
 * Main module of the application.
 */
angular
  .module('libPdfbooksApp', [
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
      .when('/connect', {
        templateUrl: 'views/connect.html',
        controller: 'ConnectCtrl',
        controllerAs: 'connect'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
