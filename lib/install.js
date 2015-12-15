'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['-version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('java binary test failed');
		return;
	}

	log.success('java binary test passed successfully');
});
