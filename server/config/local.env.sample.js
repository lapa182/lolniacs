'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'lolniacs-secret',

  FACEBOOK_ID:      '620019668133391',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',

  RIOT_KEY:         '14e1bd66-44d7-4562-bc2e-dc8a06503731',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
