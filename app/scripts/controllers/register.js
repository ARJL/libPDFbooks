'use strict';

/**
 * @ngdoc function
 * @name libPdfbooksApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the libPdfbooksApp
 */
angular.module('libPdfbooksApp')
  .controller('RegisterCtrl', function ($scope,$routeParams,$location,registerService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var days=new Array();
    for (var i = 1; i <= 31; i++) {
    	days.push(i)
    };
    $scope.days=days;

    $scope.months = [ "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December" ];

	var years=new Array()
	for (var i = 1950; i < 2017; i++) {
		years.push(i)
	};
	$scope.years=years;

	$scope.formSubmit = function() {
		console.log($scope.username)
		console.log($scope.email)
		console.log($scope.password)
		console.log($scope.day)
      	console.log($scope.month)
      	console.log($scope.year)
      	console.log($scope.gender)
      	$location.url('/profil');

    };

  });
