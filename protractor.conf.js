exports.config = {
  	baseUrl: 'http://www.forbes.com/',
	getPageTimeout: 30000,
  	allScriptsTimeout: 30000,
  	framework: 'jasmine2',
	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true, // Use colors in the command line report.
		defaultTimeoutInterval: 60000,
		includeStackTrace: true,
		realtimeFailure: true,
        useAllAngular2AppRoots: true,
		print: function() {}
	},
	multiCapabilities: [
		{
			browserName: 'chrome',
			logName: 'Desktop Chrome',
			chromeOptions: {
				args: [
					'start-maximized',
                    //'incognito'
				],
			},
            exclude: [
                'test/protractor-spec/amparticle/*pagecheck.spec.js',
                'test/protractor-spec/amparticle/**/*.spec.js',
                'test/protractor-spec/ampgallery/**/*.spec.js',
                'test/protractor-spec/ampgallery/**/*.spec.js',
                'test/protractor-spec/ampvideo/**/*.spec.js',
                'test/protractor-spec/newsletters/mobilepagecheck.spec.js',
                'test/protractor-spec/listprofiles/mobilepagecheck.spec.js',
                'test/protractor-spec/video/mobilepagecheck.spec.js'
            ]
		},
		{
			browserName: 'chrome',
			logName: 'Mobile Chrome',
			chromeOptions: {
				mobileEmulation: {
					deviceName: 'Apple iPhone 6 Plus'
				},
                args: [
                    'incognito'
                ]
			},
			exclude: [
				'test/protractor-spec/article/article-leftrail.spec.js',
				'test/protractor-spec/bvarticle/article-leftrail.spec.js',
				'test/protractor-spec/angulargallery/pagecheck.spec.js',
                'test/protractor-spec/angulargallery/**/*.spec.js',
                'test/protractor-spec/newsletters/pagecheck.spec.js',
                'test/protractor-spec/forbespress/**/*.spec.js',
                'test/protractor-spec/listprofiles/pagecheck.spec.js',
                'test/protractor-spec/video/pagecheck.spec.js'
			]
		},
/*        {
            'capabilities': {
                'browserstack.user': 'kaushalshah3',
                'browserstack.key': 'aZuM2X6UL573W77rkbmJ',
                'browserName': 'iPhone',
                'platform': 'MAC',
                'device': 'iPhone 6S Plus'
            }
        },
        {
			browserName: 'chrome',
			logName: 'iPad Chrome',
			chromeOptions: {
				mobileEmulation: {
					deviceName: 'Apple iPad'
				}
			},
			exclude: [
				'test/protractor-spec/article/article-leftrail.spec.js'
			]
		}
		 {
		 	browserName: 'firefox',
		 	logName: 'Desktop Firefox',
            marionette: true
		 },*/
	],
	suites: {
		article: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/article/*pagecheck.spec.js',
			'test/protractor-spec/article/**/*.spec.js'
		],
        bvarticle: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/bvarticle/*pagecheck.spec.js',
			'test/protractor-spec/bvarticle/**/*.spec.js'
		],
		contrib: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/contrib/*pagecheck.spec.js',
			'test/protractor-spec/contrib/**/*.spec.js'
		],
		csf: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/csf/*pagecheck.spec.js',
			'test/protractor-spec/csf/**/*.spec.js'
		],
		csr: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/channelsections/*pagecheck.spec.js',
			'test/protractor-spec/channelsections/**/*.spec.js'
		],
		angulargallery: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/angulargallery/*pagecheck.spec.js',
			'test/protractor-spec/angulargallery/**/*.spec.js'
		],
		search: [
			'test/protractor-spec/global.spec.js',
			'test/protractor-spec/search/*pagecheck.spec.js',
            'test/protractor-spec/search/**/*.spec.js'
		],
        homepage: [
            'test/protractor-spec/global.spec.js',
            'test/protractor-spec/homepage/*pagecheck.spec.js',
            'test/protractor-spec/homepage/**/*.spec.js'
        ],
        forbespress: [
            'test/protractor-spec/forbespress/*pagecheck.spec.js',
            'test/protractor-spec/forbespress/**/*.spec.js'
        ],
        amparticle: [
            'test/protractor-spec/amparticle/*pagecheck.spec.js',
            'test/protractor-spec/amparticle/**/*.spec.js'
        ],
        ampgallery: [
            'test/protractor-spec/ampgallery/**/*pagecheck.spec.js',
            'test/protractor-spec/ampgallery/**/*.spec.js'
        ],
        ampvideo: [
            'test/protractor-spec/ampvideo/**/*pagecheck.spec.js',
            'test/protractor-spec/ampvideo/**/*.spec.js'
        ],
        newsletters: [
            'test/protractor-spec/newsletters/*pagecheck.spec.js'
        ],
        legacyarticle: [
            'test/protractor-spec/legacyarticle/*pagecheck.spec.js'
        ],
        listprofiles: [
            'test/protractor-spec/listprofiles/*pagecheck.spec.js'
        ],
        video: [
            'test/protractor-spec/video/*pagecheck.spec.js'
        ],
	},
	specs: [
		'test/protractor-spec/global.spec.js',
//		'test/protractor-spec/article/*pagecheck.spec.js',
//		'test/protractor-spec/article/**/*.spec.js',
//		'test/protractor-spec/contrib/*pagecheck.spec.js',
//		'test/protractor-spec/contrib/**/*.spec.js',
//		'test/protractor-spec/csf/*pagecheck.spec.js',
//		'test/protractor-spec/csf/**/*.spec.js',
//        'test/protractor-spec/bvarticle/*pagecheck.spec.js',
//		'test/protractor-spec/bvarticle/**/*.spec.js',
//		'test/protractor-spec/channelsections/*pagecheck.spec.js',
//		'test/protractor-spec/channelsections/**/*.spec.js',
//		'test/protractor-spec/search/*pagecheck.spec.js',
//      'test/protractor-spec/search/**/*.spec.js', 
      'test/protractor-spec/homepage/*pagecheck.spec.js',
      'test/protractor-spec/homepage/**/*.spec.js',
//        'test/protractor-spec/angulargallery/*pagecheck.spec.js',
//        'test/protractor-spec/angulargallery/**/*.spec.js',
//      'test/protractor-spec/forbespress/*pagecheck.spec.js',
//      'test/protractor-spec/forbespress/**/*.spec.js',
//      'test/protractor-spec/amparticle/*pagecheck.spec.js',
//      'test/protractor-spec/amparticle/**/*.spec.js',
//      'test/protractor-spec/ampgallery/*pagecheck.spec.js',
//      'test/protractor-spec/ampgallery/**/*.spec.js',
//        'test/protractor-spec/ampvideo/*pagecheck.spec.js',
//        'test/protractor-spec/ampvideo/**/*.spec.js',
//        'test/protractor-spec/newsletters/*pagecheck.spec.js',
//        'test/protractor-spec/legacyarticle/*pagecheck.spec.js',
//        'test/protractor-spec/listprofiles/*pagecheck.spec.js',
//        'test/protractor-spec/video/*pagecheck.spec.js'
	],
	onPrepare: function() {
		var FbsReporter = require('./reporter/custom-reporter.js');
		jasmine.getEnv().addReporter(FbsReporter);
		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({
			displayStacktrace: 'spec',
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
		browser.get('/');
		browser.ignoreSynchronization = false;
	}
}
