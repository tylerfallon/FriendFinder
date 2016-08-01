var path = require('path');
var express = require('express');
var friends = require('../data/friends.js');
var site = express();

module.exports = function(site) {
	site.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	site.post('/api/friends', function(req, res) {
		var addFriend = req.body;
		friends.push(addFriend);
		res.json(friends);
		checkScores();
	});

	site.post('/api/clear', function(req, res) {
		friends = [];
	});
}

function checkScores() {
	var usersCount = 0;
	for (var i = 0; i < friends.length; i++) {
		for (var x = 0; x < friends[i].scores.length; x++) {
			usersCount += friends[i].scores[x];
		}
	};
};