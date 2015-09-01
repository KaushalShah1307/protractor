
var Firebase = require('firebase');

var firebase = new Firebase('https://protractor-forbes.firebaseio.com/');
// console.log(firebase);
var jasmineRef,
	sessionRef,
	suiteRef;

var myReporter = {
	jasmineStarted: function(suiteInfo) {
		suiteInfo.time= new Date().getTime();
		browser.getProcessedConfig().then(function(config) {
			suiteInfo.browser = config.capabilities;
			environmentRef = firebase.child(config.baseUrl.replace("http://","").replace(".forbes.com","").replace("/",""));
			environmentRef.orderByChild("time").limitToLast(1).once("value", function(lastSession) {
				lastSession.forEach(function(data) {
					var key = data.key(),
						nextNumber = parseInt(key.replace("session-",""))+1,
						nextKey = "session-"+nextNumber;

					sessionRef = environmentRef.child(nextKey);
					sessionRef.set(suiteInfo);
					console.log("session ready");
				});

					//Start with session-0 key if there are none in the database
				if(!lastSession.val()) {
					sessionRef = environmentRef.child("session-0");
					sessionRef.set(suiteInfo);
				}
			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			});
		});
	},
	suiteStarted: function(result) {
		if (sessionRef) {
			console.log(result.id);
			suiteRef = sessionRef.child(result.id);
			suiteRef.set(result);
		} else {
			setTimeout(function() {
				return myReporter.suiteStarted(result)
			}, 200);
		}
	},
	specStarted: function(result) {
		// console.log('specStarted',result);
	},
	specDone: function(result) {
		if (suiteRef) {
			specRef = suiteRef.child(result.id);
			specRef.set(result);
		} else {
			setTimeout(function() {
				return myReporter.specDone(result)
			}, 200);
		}
	},
	suiteDone: function(result) {
		// console.log(result);
		// console.log(sessionRef.ready);
	},
	jasmineDone: function(suiteInfo) {
		// console.log(suiteInfo);
	}
};

console.log('reporter');
// module.exports = myReporter;/
jasmine.getEnv().addReporter(myReporter);