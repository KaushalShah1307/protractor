
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
	tab = '&nbsp;&nbsp;&nbsp;&nbsp;',
	lb = '<br>';

var myReporter = {

	jasmineStarted: function(suiteInfo) {
		suiteInfo.time = timestamp;
		this.suitesInProgress = 0;
		browser.getProcessedConfig().then(function(config) {
			suiteInfo.browser = config.capabilities;
			environmentName = config.baseUrl.replace("http://","").replace(".forbes.com","").replace("/","");
			environmentRef = firebase.child(environmentName);
			environmentRef.child('lastSession').once("value", function(lastSession) {

				//Start with session-0 key if there are none in the database
				if (lastSession.val()) {
					lastKey = lastSession.val(),
					nextNumber = parseInt(lastKey.replace("session-",""))+1,
					nextKey = "session-" + nextNumber;
					environmentRef.child('lastSession').set(nextKey);
					sessionRef = environmentRef.child(nextKey);
				} else {
					sessionRef = environmentRef.child("session-0");
					environmentRef.child('lastSession').set("session-0");
					sessionRef.set(suiteInfo);
				}

				console.log('Results from this session can be seen at', sessionRef.toString());
				emailHead = 'Tests were run on '.concat(suiteInfo.browser.logName, ' for ', environmentName, ' at ', new Date(timestamp).toString(), '.', lb, lb);
				emailFoot = '<a href='.concat(sessionRef.toString(), '>Full Results</a>');
			});
		});
	},

	suiteStarted: function(result) {
		if (sessionRef) {
			suiteRef = sessionRef.child(result.id);
			suiteRef.set(result);
			var indent = '';
			if (this.suitesInProgress > 0) {
				for (var j = 0; j <= this.suitesInProgress; j++) {
					indent += tab;
					if (j === this.suitesInProgress) {
						emailBody += '<p>' + indent.concat(result.description) + '</p>';
					}
				}
			} else {
				emailBody += '<p>' + indent.concat(result.description) + '</p>';
			}
			this.suitesInProgress++;
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
			var indent = '',
				color = result.failedExpectations.length === 0 ? '#afa' : '#faa';
			if (this.suitesInProgress > 0) {
				for (var j = 0; j <= this.suitesInProgress; j++) {
					indent += tab;
					if (j === this.suitesInProgress) {
						emailBody += '<p style="background-color:' + color + ';">' + indent.concat(result.description, ' ', result.status) + '</p>';
					}
				}
			} else {
				emailBody += '<p style="background-color:' + color + ';">' + indent.concat(result.description, ' ', result.status) + '</p>';
			}

		} else {
			setTimeout(function() {
				return myReporter.specDone(result)
			}, 200);
		}
	},

	suiteDone: function(result) {
		this.suitesInProgress--;
	},

	jasmineDone: function(suiteInfo) {
		email = true;
		transporter.sendMail({
			from: 'forbesqatest@forbes.com',
			to: email ? ', jjean@forbes.com, kshah@forbes.com, vsupitskiy@forbes.com' : 'jjean@forbes.com, forbesjjean@gmail.com',
			subject: '[' + new Date(timestamp).toString() + '] Protractor Report',
			html: '<div>' + emailHead + emailBody + emailFoot + '</div>'
		});
	}
};
jasmine.getEnv().addReporter(myReporter);