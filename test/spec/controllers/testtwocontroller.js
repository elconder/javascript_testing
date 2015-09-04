'use strict';

describe('Controller: TestTwoController', function () {
  var TestTwoCtrl, scope;

  beforeEach(function () {
    module('mytodoApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestTwoCtrl = $controller('TestTwoController', {
      $scope: scope
    });
  }));

  it('initially has a total', function () {
    expect(scope.total).toBe(6);
  });

  it('initially has items', function () {
    expect(scope.items.length).toBeGreaterThan(0);
  });

  it('updates the `total` and `items` array when a value is added', function () {
    scope.newItem = 7;
    scope.add();
    expect(scope.total).toBe(13);
  });

  it('does not update the `total` and `items` array when an empty value is added', function () {
    scope.newItem = undefined;
    scope.add();
    expect(scope.total).toBe(6);
    scope.newItem = 22;
    scope.add();
    expect(scope.total).toBe(28);
  });
});
