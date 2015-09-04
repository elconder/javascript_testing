'use strict';

describe('Controller: TestThreeController', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var TestThreeCtr, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestThreeCtr = $controller('TestThreeController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.modalNumber).toBe(1);
  });

  it('updates the `modalNumber` when a value is added', function () {
    scope.changeModalText();
    expect(scope.modalNumber).toBe(2);
    scope.changeModalText();
    expect(scope.modalNumber).toBe(3);
  });
});
