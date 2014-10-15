'use strict';

var expect = require('chai').expect;
var getUtm = require('../save-utm-in-session.refactored').getUtm;

describe('getUtm', function() {
  it('should return a rewritten utm tag', function() {
    var oldSession = {
      utm: {medium: 'pear'}
    };
    var requestUtm = 'apple';
    var session = getUtm(oldSession, requestUtm);
    expect(session).to.deep.equal({
      medium: 'apple'
    });
  });
});

