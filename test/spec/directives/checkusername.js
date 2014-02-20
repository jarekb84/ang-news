'use strict';

describe('Directive: checkUsername', function () {

  // load the directive's module
  beforeEach(module('angNewsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<check-username></check-username>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkUsername directive');
  }));
});
