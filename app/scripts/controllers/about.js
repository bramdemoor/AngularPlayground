'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPlaygroundApp
 */
angular.module('angularPlaygroundApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
