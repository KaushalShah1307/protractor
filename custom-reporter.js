
var Firebase = require('firebase');

firebase = new Firebase('https://protractor-forbes.firebaseio-demo.com/');

var myReporter = {
	jasmineStarted: function(suiteInfo) {
		console.log(suiteInfo);
	},
	suiteStarted: function(result) {
		// console.log('suiteStarted',result);
	},
	specStarted: function(result) {
		// console.log('specStarted',result);
	},
	specDone: function(result) {
		console.log('specDone');
	},
	suiteDone: function(result) {
		// console.log('suiteDone', result);
	},
	jasmineDone: function() {
		// console.log('jasmineDone');
	}
};

console.log('reporter');
// module.exports = myReporter;
jasmine.getEnv().addReporter(myReporter);