'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {templateUrl: 'views/home.html'})
      .when('/one', {templateUrl: 'views/one.html', controller: 'TestOneController'})
      .when('/two', {templateUrl: 'views/two.html', controller: 'TestTwoController'})
      .when('/three', {templateUrl: 'views/three.html', controller: 'TestThreeController'})
      .when('/four', {templateUrl: 'views/four.html', controller: 'TestFourController'})
      .otherwise({
        redirectTo: '/'
      });
  });
