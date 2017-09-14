'use strict';

/**
 * @ngdoc function
 * @name libPdfbooksApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the libPdfbooksApp
 */
angular.module('libPdfbooksApp')
  .controller('LoginCtrl', function ($scope,$routeParams,$location,loginService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.formSubmit = function() {
      if(loginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $location.url('/profil');
      } else {
        $scope.error = "Incorrect username/password !";
      } 

    };

  });
