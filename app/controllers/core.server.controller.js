'use strict';

var fs = require('fs');
var dateFormat = require('dateformat');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
	
	
};

exports.register = function(req, res) {
	res.send('success:' + req.body.fullname);
	
	var day=dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
	var data = day + ',"' + req.body.fullname + '"\r\n';
	fs.appendFile('public/register.csv', data, function (err) {	});
};


exports.cleardb = function(req, res) {
	fs.unlink('public/register.csv', function (err) {	});
	res.send('success');
};