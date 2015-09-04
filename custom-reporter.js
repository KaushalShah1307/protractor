
var Firebase = require('firebase');
var nodemailer = require('nodemailer');

var firebase = new Firebase('https://protractor-forbes.firebaseio.com/');
// console.log(firebase);
var timestamp = new Date().getTime(),
	environmentRef,
	environmentName,
	sessionRef,
	suiteRef;

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'forbesqatest@gmail.com',
		pass: 'forbes123'
	}
});

var emailBody = '',
	lb = '<br>';

var myReporter = {
	jasmineStarted: function(suiteInfo) {
		suiteInfo.time = timestamp;
		browser.getProcessedConfig().then(function(config) {
			suiteInfo.browser = config.capabilities;
			environmentName = config.baseUrl.replace("http://","").replace(".forbes.com","").replace("/","");
			environmentRef = firebase.child(environmentName);
			environmentRef.orderByChild("time").limitToLast(1).once("value", function(lastSession) {
				lastSession.forEach(function(data) {
					var key = data.key(),
						nextNumber = parseInt(key.replace("session-",""))+1,
						nextKey = "session-"+nextNumber;

					sessionRef = environmentRef.child(nextKey);
					console.log('Results from this session can be seen at', sessionRef.toString());
					sessionRef.set(suiteInfo);
				});

					//Start with session-0 key if there are none in the database
				if(!lastSession.val()) {
					sessionRef = environmentRef.child("session-0");
					sessionRef.set(suiteInfo);
				}

				emailHead = 'Tests were run on '.concat(suiteInfo.browser.logName, ' for ', environmentName, ' at ', new Date(timestamp).toString(), '.', lb, lb);
				emailFoot = '<a href='.concat(sessionRef.toString(), '>Full Results');
			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			});
		});
	},
	suiteStarted: function(result) {
		if (sessionRef) {
			suiteRef = sessionRef.child(result.id);
			suiteRef.set(result);
			suiteText = result.fullName + ': ' + lb;
		} else {
			setTimeout(function() {
				return myReporter.suiteStarted(result)
			}, 200);
		}
	},
	specStarted: function(result) {
	},
	specDone: function(result) {
		if (suiteRef) {
			specRef = suiteRef.child(result.id);
			specRef.set(result);
			if (result.failedExpectations.length > 0) {
				specText = result.description.concat(' ', lb);
				result.failedExpectations.forEach(function(failedExpectation, index, array) {
					specText = specText.concat('   ', failedExpectation.message, lb);

					if (index === (array.length -1)) {
						suiteText = suiteText.concat(specText, lb);
					}
				});
			}
		} else {
			setTimeout(function() {
				return myReporter.specDone(result)
			}, 200);
		}
	},
	suiteDone: function(result) {
		emailBody = emailBody.concat(suiteText);
	},
	jasmineDone: function(suiteInfo) {

		transporter.sendMail({
			from: 'forbesqatest@forbes.com',
			to: 'jjean@forbes.com, forbesjjean@gmail.com',
			subject: '[' + new Date(timestamp).toString() + '] Protractor Report',
			html: '<div><p>' + emailHead + emailBody + emailFoot + '</p></div>'
		});
	}
};
jasmine.getEnv().addReporter(myReporter);