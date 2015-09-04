'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:TestOneController
 * @description
 * # TestOneController
 * Controller of the yeomanApp
 */
angular.module('mytodoApp')
  .controller('TestOneController', function ($scope) {
    $scope.greeting = "Hello, World!";
    $scope.newText = undefined;
    $scope.changeGreeting = function () {
      if ($scope.newText !== undefined) {
        $scope.greeting = $scope.newText;
      }
    };
  });
