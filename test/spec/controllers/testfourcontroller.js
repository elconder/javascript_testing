'use strict';

describe('Controller: TestfourcontrollerCtrl', function () {

  var controller = null;
  var scope = null;
  var $httpBackend = null;
  var mockedDashboardJSON = null;

  beforeEach(function () {
    module('mytodoApp', 'mockedDashboardJSON');
  });

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, defaultJSON) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    $httpBackend.when('GET', 'https://api.github.com/repositories').respond(defaultJSON.fakeData);
    controller = $controller('TestFourController', {
      $scope: scope
    });
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('clicking the button updates the repos', function () {
    scope.loadRepos();
    $httpBackend.flush();
    expect(scope.repos.length).toBe(100);
  });

});
