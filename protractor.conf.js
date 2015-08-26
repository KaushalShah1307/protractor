exports.config = {
  	baseUrl: 'http://www-staging.forbes.com',
	getPageTimeout: 30000,
  	allScriptsTimeout: 30000,
  	resultJsonOutputFile: 'output.json',
  	framework: 'jasmine2',
	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true, // Use colors in the command line report.
		defaultTimeoutInterval: 20000,
		includeStackTrace: true,
		// realtimeFailure: true,
		// print: function() {}
	},
	multiCapabilities: [
		// {
		// 	browserName: 'chrome',
		// 	logName: 'Desktop Chrome',
		// 	// chromeOptions: {
		// 	// 	args: [
		// 	// 		'verbose'
		// 	// 	],
		// 	// },
		// 	// loggingPrefs: {
		// 	// 	browser: 'ALL',
		// 	// 	driver: 'ALL',
		// 	// 	client: 'ALL',
		// 	// 	server: 'ALL'
		// 	// },
		// 	// perfLoggingPrefs: {
		// 	// 	enableNetwork: true
		// 	// }
		// },
		{
			browserName: 'chrome',
			logName: 'Mobile Chrome',
			chromeOptions: {
				mobileEmulation: {
					deviceName: 'Apple iPhone 6 Plus'
				}
			}
		}
	],
	suites: {
		article: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/article/**/*.page.js',
			'test/protractor-spec/article/**/*.spec.js'
		],
		contrib: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/contrib/**/*.page.js',
			'test/protractor-spec/contrib/**/*.spec.js'
		],
		csf: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/csf/**/*.page.js',
			'test/protractor-spec/csf/**/*.spec.js'
		]
	},
	specs: [
		// 'custom-reporter.js',
		'test/protractor-spec/global.spec.js',
		'test/protractor-spec/**/*.page.js',
		'test/protractor-spec/**/*.spec.js'
	],
	onPrepare: function() {
		console.log('Preparing');
		// var CustomReporter = require('custom-reporter');
		// console.log(CustomReporter);
		// jasmine.getEnv().addReporter(new CustomReporter());
		var SpecReporter = require('jasmine-spec-reporter');
		// add jasmine spec reporter
		jasmine.getEnv().addReporter(new SpecReporter({
			displayStacktrace: 'summary',
			displayFailuresSummary: true, // display summary of all failures after execution
			displayPendingSummary: true,  // display summary of all pending specs after execution
			displaySuccessfulSpec: true,  // display each successful spec
			displayFailedSpec: true,      // display each failed spec
			displayPendingSpec: true,    // display each pending spec
			displaySpecDuration: true,   // display each spec duration
			displaySuiteNumber: true,
		}));
		browser.ignoreSynchronization = true;
		browser.get('/');
		browser.manage().window().maximize();
		browser.ignoreSynchronization = false;
	}
}