'use strict';

var sinon = require('sinon');
var expect = require('chai').expect;
var saveUtmInSession = require('../save-utm-in-session.js');

describe('saveUtmInSession', function() {
  var nextSpy = sinon.spy();
  var req = {
    session: {utm: {}},
    param: function() {}
  };
  var reqMock = sinon.mock(req);

  it('should rewrite utm_medium to session', function() {
    reqMock.expects('param').once().withArgs('utm_medium');
    saveUtmInSession(req, null, nextSpy);
    expect(nextSpy.calledOnce).equal(true);
    reqMock.verify();
  });
});

