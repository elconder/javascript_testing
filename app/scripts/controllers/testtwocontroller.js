'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:TestTwoController
 * @description
 * # TestTwoController
 * Controller of the yeomanApp
 */
angular.module('mytodoApp')
  .controller('TestTwoController', function ($scope) {
    $scope.total = 6;
    $scope.newItem = undefined;
    $scope.items = [1, 2, 3];
    $scope.add = function () {
      if (typeof $scope.newItem == 'number') {
        $scope.items.push($scope.newItem);
        $scope.total = 0;
        for (var i = 0; i < $scope.items.length; i++) {
          $scope.total += parseInt($scope.items[i]);
        }
      }
    };
  });
