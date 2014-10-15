'use strict';

function saveUtmInSession(req, res, next) {
  var utm = req.session.utm;
  req.session.utm = {
    medium: req.param('utm_medium') || utm.medium
  };
  return next();
}

module.exports = saveUtmInSession;

