'use strict';

var express = require('express');
var session = require('express-session');
var expect = require('chai').expect;
var supertest = require('supertest');
var saveUtmInSession = require('../save-utm-in-session.js');

var app = express();
var request = supertest(app);

var beforeSession, afterSession;
app.use(session({
  secret: 'secret',
  cookie: {},
  resave: true,
  saveUninitialized: true
}));
app.use(function beforeStub(req, res, next) {
  req.session.utm = beforeSession;
  next();
});
app.use(saveUtmInSession);
app.use(function afterStub(req, res, next) {
  afterSession = req.session.utm;
  next();
});

describe('saveUtmInSession', function() {
  it('should rewrite utm_medium to session', function(done) {
    beforeSession = {medium: 'pear'}; 
    request.get('/?utm_medium=apple').end(function() {
      expect(afterSession.medium).to.equal('apple');
      done();
    });
  });
});
