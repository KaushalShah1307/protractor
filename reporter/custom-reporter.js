
var Firebase = require('firebase'),
	firebase = new Firebase('https://protractor-forbes.firebaseio.com/'),
	email = require('./email-processor.js');


var date = new Date(), dateString = date.toDateString() + ' ' + date.toLocaleTimeString(),
	environmentRef, environmentName, sessionRef, suiteRef,
	failedExpectationCount = passedExpectationCount = suitesInProgress = suitesInProgress = 0,
	currentConfig,
	failedExpectations = [];

var FbsReporter = {

	jasmineStarted: function(suiteInfo) {
		suiteInfo.time = date.getTime();
		browser.getProcessedConfig().then(function(config) {
			suiteInfo.browser = currentConfig = config.capabilities;
			suiteInfo.environment = environmentName = config.baseUrl.replace("http://","").replace(".forbes.com","").replace("/","");
		}).then(function() {
			environmentRef = firebase.child(environmentName);
			environmentRef.child('lastSession').once("value", function(lastSession) {
				var nextKey;
				if (lastSession.val()) {
					var lastKey = lastSession.val(),
						nextNumber = parseInt(lastKey.replace("session-",""))+1;
						
					nextKey = "session-" + nextNumber;
				} else {
					nextKey = "session-0"; //Start with session-0 key if there are none in the database
				}
				environmentRef.child('lastSession').set(nextKey);
				sessionRef = environmentRef.child(nextKey);
				suiteInfo.refUrl = sessionRef.toString();
				sessionRef.set(suiteInfo);

				email.create(suiteInfo);

				console.log('Results from this session can be seen at', suiteInfo.refUrl);
			});
		});
	},

	suiteStarted: function(result) {
		if (sessionRef) {
			suiteRef = sessionRef.child('suites').child(result.fullName);
			suiteRef.update(result);
			email.suiteStarted(result);
		} else {
			setTimeout(function() {
				return FbsReporter.suiteStarted(result)
			}, 200);
		}
	},

	specStarted: function() {
	},

	specDone: function(result) {
		if (suiteRef) {
			specRef = suiteRef.child('specs').child(result.description);
			specRef.update(result);
			email.specDone(result);

		} else {
			setTimeout(function() {
				return FbsReporter.specDone(result)
			}, 200);
		}

	},

	suiteDone: function() {
		email.suiteDone();
	},

	jasmineDone: function(suiteInfo) {
		from_server = process.env.USERNAME === 'bpoon';

		if (failedExpectationCount !== 0 || !from_server) {
			email.send(from_server ? ', jjean@forbes.com, kshah@forbes.com, vsupitskiy@forbes.com' : process.env.USERNAME + '@forbes.com, forbesjjean@gmail.com');
		}
		var destination = from_server ? '%23protractor' : ('@' + process.env.USERNAME),
			slack_message = https.request({
				hostname: 'forbesdev.slack.com',
				path: '/services/hooks/slackbot?token=5z1O62OQb5pipH8Pz3LcVuXS&channel=' + destination,
				method: 'POST'
			});

		slack_message.write('*' + environmentName.toUpperCase() + '* (' + currentConfig.logName + '):\n' + failedExpectationCount + ' out of ' + (passedExpectationCount + failedExpectationCount) + ' Expectations Failed.');
		slack_message.end();
	}
};
module.exports = FbsReporter;