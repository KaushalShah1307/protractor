var nodemailer = require('nodemailer'),
	date = new Date(), dateString = date.toDateString() + ' ' + date.toLocaleTimeString(), environment,
	emailHead, emailFoot,
	emailBody = '';
	currentIndent = '',
	tab = '&nbsp;&nbsp;&nbsp;&nbsp;',

	suites = [];

var Email = {
	create : function(suiteInfo) {
		environment = suiteInfo.environment;
		emailHead = '<p>Tests were run on '.concat(suiteInfo.browser.logName, ' for ', suiteInfo.environment, ' at ', dateString, '.</p>');
		emailFoot = '<a href=' + suiteInfo.refUrl + '>Full Results</a>';
	},
	send : function(address) {
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
			to: address,
			subject: '[' + dateString + '] [' + environment + '] Protractor Report',
			html: '<div>' + emailHead + emailBody + emailFoot + '</div>'
		});
	},

	suiteStarted : function(suite) {
		if (suites.indexOf(suite.fullName) < 0) {
			suites.push(suite.fullName);
			emailBody += '<p>' + currentIndent.concat(suite.description) + '</p>';
		}
		this.increaseIndent();
	},
	suiteDone: function() {
		this.decreaseIndent();
	},

	specStarted: function() {

	},

	specDone: function(spec) {
		failedExpectationCount += spec.failedExpectations.length;
		passedExpectationCount += spec.passedExpectations.length;

		var color = spec.failedExpectations.length === 0 ? '#afa' : '#faa';
		emailBody += '<p style="background-color:' + color + ';">' + currentIndent.concat(spec.description) + '</p>';

		if (!spec.failedExpectations) return;

		spec.failedExpectations.forEach(function(failedExpectation) {
			failedExpectations.push(failedExpectation);
			emailBody += '<p style="background-color:' + color + ';">' + currentIndent.concat(tab, failedExpectation.message) + '</p>';
		});

	},

	
	increaseIndent: function() {
		currentIndent += tab;
	},
	decreaseIndent: function() {
		currentIndent = currentIndent.substring(0, (currentIndent.length - tab.length));
	}
}
module.exports = Email;