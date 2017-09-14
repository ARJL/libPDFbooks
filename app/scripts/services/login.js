'use strict';

/**
 * @ngdoc service
 * @name libPdfbooksApp.login
 * @description
 * # login
 * Service in the libPdfbooksApp.
 */
angular.module('libPdfbooksApp')
  .factory('loginService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
  });
