'use strict';

describe('Directive: kpi', function () {

  // load the directive's module
  beforeEach(module('angularPlaygroundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kpi></kpi>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kpi directive');
  }));
});
