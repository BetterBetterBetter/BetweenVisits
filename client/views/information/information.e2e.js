'use strict';

describe('information route', function () {

  beforeEach(function () {
    browser.get('/information');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('InformationCtrl');
  });

});
