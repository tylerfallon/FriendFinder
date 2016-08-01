var path = require('path');
var express = require('express');

var app = express();

module.exports = function(site) {

	site.get('/', function(req, res) {
		 res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	site.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	site.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}