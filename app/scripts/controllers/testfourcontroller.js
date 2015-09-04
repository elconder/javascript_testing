'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:TestFourController
 * @description
 * # TestFourController
 * Controller of the yeomanApp
 */
angular.module('mytodoApp')
  .controller('TestFourController', function ($scope,$http) {
    $scope.repos = [];
    $scope.loadRepos = function () {
      $http.get('https://api.github.com/repositories').then(function (repos) {
        $scope.repos = repos.data;
      });
    };
  });
