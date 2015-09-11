
var Firebase = require('firebase'),
	firebase = new Firebase('https://protractor-forbes.firebaseio.com/'),
	nodemailer = require('nodemailer');


var date = new Date(), dateString = date.toDateString() + ' ' + date.toLocaleTimeString(),
	environmentRef, environmentName, sessionRef, suiteRef,
	failedExpectationCount = passedExpectationCount = suitesInProgress = suitesInProgress = 0,
	currentConfig,
	failedExpectations = [],
	suites = [];

var emailBody = '',
	tab = '&nbsp;&nbsp;&nbsp;&nbsp;',
	lb = '<br>';

var FbsReporter = {

	jasmineStarted: function(suiteInfo) {
		suiteInfo.time = date.getTime();
		browser.getProcessedConfig().then(function(config) {
			suiteInfo.browser = currentConfig = config.capabilities;
			environmentName = config.baseUrl.replace("http://","").replace(".forbes.com","").replace("/","");
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
				sessionRef.set(suiteInfo);

				console.log('Results from this session can be seen at', sessionRef.toString());
				emailHead = '<p>Tests were run on '.concat(suiteInfo.browser.logName, ' for ', environmentName, ' at ', dateString, '.</p>');
				emailFoot = '<a href='.concat(sessionRef.toString(), '>Full Results</a>');
			});
		});
	},

	suiteStarted: function(result) {
		if (sessionRef) {
			suiteRef = sessionRef.child('suites').child(result.fullName);
			suiteRef.update(result);
			var indent = '';
			if (suites.indexOf(result.fullName) < 0) {
				suites.push(result.fullName);

				if (suitesInProgress > 0) {
					for (var j = 0; j <= suitesInProgress; j++) {
						indent += tab;
						if (j === suitesInProgress) {
							emailBody += '<p>' + indent.concat(result.description) + '</p>';
						}
					}
				} else {
					emailBody += '<p>' + indent.concat(result.description) + '</p>';
				}
			}
			suitesInProgress++;
		} else {
			setTimeout(function() {
				return FbsReporter.suiteStarted(result)
			}, 200);
		}
	},

	specStarted: function(result) {
	},

	specDone: function(result) {
		if (suiteRef) {
			specRef = suiteRef.child('specs').child(result.description);
			specRef.update(result);

			var indent = '',
				color = result.failedExpectations.length === 0 ? '#afa' : '#faa';
			if (suitesInProgress > 0) {
				for (var j = 0; j <= suitesInProgress; j++) {
					indent += tab;
					if (j === suitesInProgress) {
						emailBody += '<p style="background-color:' + color + ';">' + indent.concat(result.description) + '</p>';
						result.failedExpectations.forEach(function(failedExpectation) {
							failedExpectationCount++;
							emailBody += '<p style="background-color:' + color + ';">' + indent.concat(tab, failedExpectation.message) + '</p>';
						});
						passedExpectationCount += result.passedExpectations.length;
					}
				}
			} else {
				emailBody += '<p style="background-color:' + color + ';">' + indent.concat(result.description) + '</p>';
				result.failedExpectations.forEach(function(failedExpectation) {
					failedExpectationCount++;
					failedExpectations.push(failedExpectation);
					emailBody += '<p style="background-color:' + color + ';">' + indent.concat(tab, failedExpectation.message) + '</p>';
				});
				passedExpectationCount += result.passedExpectations.length;
			}

		} else {
			setTimeout(function() {
				return FbsReporter.specDone(result)
			}, 200);
		}

	},

	suiteDone: function(result) {
		suitesInProgress--;
	},

	jasmineDone: function(suiteInfo) {
		from_server = process.env.USERNAME === 'bpoon';

		if (failedExpectationCount !== 0 || !from_server) {
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'forbesqatest@gmail.com',
					pass: 'forbes123'
				}
			});
			
			emailHead += '<p>' + passedExpectationCount + ' out of ' + (passedExpectationCount + failedExpectationCount) + ' Expectations Passed.</p>';

			transporter.sendMail({
				from: 'forbesqatest@forbes.com',
				to: from_server ? ', jjean@forbes.com, kshah@forbes.com, vsupitskiy@forbes.com' : process.env.USERNAME + '@forbes.com, forbesjjean@gmail.com',
				subject: '[' + dateString + '] [' + environmentName + '] Protractor Report',
				html: '<div>' + emailHead + emailBody + emailFoot + '</div>'
			});
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