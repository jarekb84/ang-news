'use strict';

describe('Filter: url', function () {

  // load the filter's module
  beforeEach(module('angNewsApp'));

  // initialize a new instance of the filter before each test
  var url;
  beforeEach(inject(function ($filter) {
    url = $filter('url');
  }));

  it('should return the input prefixed with "url filter:"', function () {
    var text = 'angularjs';
    expect(url(text)).toBe('url filter: ' + text);
  });

});
