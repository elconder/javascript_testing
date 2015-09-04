'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:TestThreeController
 * @description
 * # TestThreeController
 * Controller of the yeomanApp
 */
angular.module('mytodoApp')
  .controller('TestThreeController', function ($scope,$modal) {
    $scope.modalNumber = 1;
    var myModal = $modal({scope: $scope, templateUrl: 'modal.tpl.html', show: false});
    $scope.showModal = function () {
      myModal.$promise.then(myModal.show);
    };
    $scope.changeModalText = function () {
      $scope.modalNumber++;
    };
  });
