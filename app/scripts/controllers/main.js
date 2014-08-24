'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPlaygroundApp
 */
angular.module('angularPlaygroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
