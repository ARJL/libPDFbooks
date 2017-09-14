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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'ProfilCtrl',
        controllerAs: 'profil'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
