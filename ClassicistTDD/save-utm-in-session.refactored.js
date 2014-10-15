'use strict';

function getUtm(session, requestUtm) {
  return {
    medium: requestUtm || session.utm.medium
  };
}

function saveUtmInSession(req, res, next) {
  req.session.utm = getUtm(req.session, req.param('utm_medium'));
  return next();
}

module.exports = {
  getUtm: getUtm,
  saveUtmInSession: saveUtmInSession
};

