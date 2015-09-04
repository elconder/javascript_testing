'use strict';

describe('Controller: TestOneController', function () {

  beforeEach(function () {
    module('mytodoApp');
  });

  var TestOneCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestOneCtrl = $controller('TestOneController', {
      $scope: scope
    });
  }));

  it('initially has a greeting', function () {
    expect(scope.greeting).toBe("Hello, World!");
  });

  it('clicking the button changes the greeting if text is inputed', function () {
    scope.newText = "Hi!";
    scope.changeGreeting();
    expect(scope.greeting).toBe("Hi!");
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    scope.changeGreeting();
    expect(scope.greeting).toBe("Hello, World!");
  });

});
