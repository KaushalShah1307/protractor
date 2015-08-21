exports.config = {
  	baseUrl: 'http://www-staging.forbes.com',
	getPageTimeout: 15000,
  	allScriptsTimeout: 15000,
  	resultJsonOutputFile: 'output.json',
	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true, // Use colors in the command line report.
		defaultTimeoutInterval: 60000,
		includeStackTrace: false
	},
	multiCapabilities: [
		// {
		// 	browserName: 'chrome',
		// 	logName: 'Desktop Chrome',
		// 	chromeOptions: {
		// 		args: [
		// 			'verbose'
		// 		],
		// 	},
		// 	loggingPrefs: {
		// 		browser: 'ALL',
		// 		driver: 'ALL',
		// 		client: 'ALL',
		// 		server: 'ALL'
		// 	},
		// 	perfLoggingPrefs: {
		// 		enableNetwork: true
		// 	}
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
			'test/protractor-spec/article/**/*.js'
		]
	},
	specs: [
		'test/protractor-spec/global.spec.js',
		'test/protractor-spec/**/*.page.js',
		'test/protractor-spec/**/*.spec.js'
	],
	onPrepare: function() {
		console.log('Preparing');
		browser.ignoreSynchronization = true;
		browser.get('/');
		browser.manage().window().maximize();
	}
}