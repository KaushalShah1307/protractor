exports.config = {
  	baseUrl: 'http://www-staging.forbes.com',
	getPageTimeout: 15000,
  	allScriptsTimeout: 15000,
  	resultJsonOutputFile: 'output.json',
	jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
		defaultTimeoutInterval: 300000,
		includeStackTrace: false
	},
	multiCapabilities: [
		{
			browserName: 'chrome',
			logName: 'Desktop Chrome',

		}
	],
	specs: [
		'test/protractor-spec/global.spec.js',
		'test/protractor-spec/**/*.spec.js'
	],
	onPrepare: function() {
		console.log('Preparing');
		browser.ignoreSynchronization = true;
		browser.get('/');
		browser.manage().window().maximize();
	}
}