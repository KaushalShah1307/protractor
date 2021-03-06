exports.config = {
  	baseUrl: 'https://www.google.com/',
    //'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
	getPageTimeout: 30000,
  	allScriptsTimeout: 60000,
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
                    '--start-fullscreen'
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
                'test/protractor-spec/video/mobilepagecheck.spec.js',
                'test/protractor-spec/mdotarticle/*.spec.js',
                'test/protractor-spec/templatesgallery/**/*.spec.js',
                'test/protractor-spec/homepage/mobileads.spec.js',
                'test/protractor-spec/welcomead/mobilepagecheck.spec.js',
                'test/protractor-spec/ng2article/noleftrailview.spec.js',
                'test/protractor-spec/ng2article/noleftrailads.spec.js',
                'test/protractor-spec/ng2brandvoicearticle/noleftrailview.spec.js',
                'test/protractor-spec/ng2brandvoicearticle/noleftrailads.spec.js',
                'test/protractor-spec/ng2article/noleftrailview-tracking.spec.js',
                'test/protractor-spec/videoseries/2.mobileads.spec.js',
                'test/protractor-spec/videoseries/7.mobileads.spec.js',
                'test/protractor-spec/article/**/*.spec.js',
                'test/protractor-spec/bvarticle/**/*.spec.js',
                'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js'
            ]
		},
		{
			browserName: 'chrome',
			logName: 'Mobile Chrome',
			chromeOptions: {
				mobileEmulation: {
					deviceName: 'iPhone 6 Plus'
				},
                args: [
                    'incognito'
                ]
			},
			exclude: [
				'test/protractor-spec/article/article-leftrail.spec.js',
				'test/protractor-spec/bvarticle/article-leftrail.spec.js',
                'test/protractor-spec/ng2article/**/*.spec.js',
				'test/protractor-spec/ng2article/article-leftrail.spec.js',
                'test/protractor-spec/ng2brandvoicearticle/**/*.spec.js',
				'test/protractor-spec/ng2brandvoicearticle/article-leftrail.spec.js',
				'test/protractor-spec/angulargallery/pagecheck.spec.js',
                'test/protractor-spec/angulargallery/**/*.spec.js',
                'test/protractor-spec/newsletters/pagecheck.spec.js',
                //'test/protractor-spec/forbespress/**/*.spec.js',
                'test/protractor-spec/listprofiles/pagecheck.spec.js',
                'test/protractor-spec/video/pagecheck.spec.js',
                'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js',
                'test/protractor-spec/ng2articlechecks/**/*.spec.js',
                'test/protractor-spec/homepage/desktopads.spec.js',
                'test/protractor-spec/welcomead/desktoppagecheck.spec.js',
                'test/protractor-spec/mediamanager/**/*.spec.js',
                'test/protractor-spec/videoseries/2.desktopads.spec.js',
                'test/protractor-spec/videoseries/6.desktopads.spec.js'
			]
		},
		{
			browserName: 'chrome',
			logName: 'Resized Chrome',
			chromeOptions: {
				args: [
                    '--window-size=1229,800',
                    'incognito'
                ]
			},
			exclude: [
                'test/protractor-spec/amparticle/*pagecheck.spec.js',
                'test/protractor-spec/amparticle/**/*.spec.js',
                'test/protractor-spec/ampgallery/**/*.spec.js',
                'test/protractor-spec/ampgallery/**/*.spec.js',
                'test/protractor-spec/ampvideo/**/*.spec.js',
                'test/protractor-spec/listprofiles/**/*.spec.js',
                'test/protractor-spec/listprofiles/*pagecheck.spec.js',
                'test/protractor-spec/newsletters/mobilepagecheck.spec.js',
                'test/protractor-spec/video/mobilepagecheck.spec.js',
                'test/protractor-spec/mdotarticle/*.spec.js',
                'test/protractor-spec/templatesgallery/**/*.spec.js',
                'test/protractor-spec/homepage/mobileads.spec.js',
                'test/protractor-spec/welcomead/mobilepagecheck.spec.js',
				'test/protractor-spec/article/article-leftrail.spec.js',
				'test/protractor-spec/bvarticle/article-leftrail.spec.js',
				'test/protractor-spec/ng2article/article-leftrail.spec.js',
				'test/protractor-spec/ng2article/ads.spec.js',
				'test/protractor-spec/ng2article/article-tracking.spec.js',
				'test/protractor-spec/ng2brandvoicearticle/article-leftrail.spec.js',
				'test/protractor-spec/ng2brandvoicearticle/ads.spec.js',
				'test/protractor-spec/ng2brandvoicearticle/article-tracking.spec.js',
                'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js',
                'test/protractor-spec/ng2articlechecks/**/*.spec.js',
				'test/protractor-spec/angulargallery/pagecheck.spec.js',
                'test/protractor-spec/angulargallery/**/*.spec.js',
                'test/protractor-spec/newsletters/pagecheck.spec.js',
                'test/protractor-spec/forbespress/**/*.spec.js',
                'test/protractor-spec/listprofiles/pagecheck.spec.js',
                'test/protractor-spec/video/pagecheck.spec.js',
                'test/protractor-spec/homepage/desktopads.spec.js',
                'test/protractor-spec/welcomead/desktoppagecheck.spec.js',
		        'test/protractor-spec/pulse/**/*.spec.js',
                'test/protractor-spec/mediamanager/**/*.spec.js',
                'test/protractor-spec/videoseries/**/*.spec.js',
                'test/protractor-spec/article/**/*.spec.js',
                'test/protractor-spec/bvarticle/**/*.spec.js',
                'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js'
			]
		},
 /*       {
            'capabilities': {
                'browserstack.user': '{replace with your browserstack ID}',
                'browserstack.key': '{replace with your browserstack integration key}',
                'browserName': 'chrome'}
        },
 /*       {
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
            firefoxPath: 'C:/Users/kshah/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.17.0.exe'
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
        articlescroll: [
            'test/protractor-spec/articlescroll/**/*.spec.js',
            'test/protractor-spec/articlescroll/*pagecheck.spec.js'
        ],
        mdotarticle: [
            'test/protractor-spec/mdotarticle/**/*.spec.js',
            'test/protractor-spec/mdotarticle/*pagecheck.spec.js'
        ],
        templatesgallery: [
            'test/protractor-spec/templatesgallery/**/*.spec.js',
            'test/protractor-spec/templatesgallery/*pagecheck.spec.js'
        ],
        ng2article: [
			'test/protractor-spec/ng2article/*pagecheck.spec.js',
			'test/protractor-spec/ng2article/**/*.spec.js'
		],
        ng2brandvoicearticle: [
			'test/protractor-spec/ng2article/*pagecheck.spec.js',
			'test/protractor-spec/ng2article/**/*.spec.js'
		],
        ng2articlechecks: [
			'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js',
            'test/protractor-spec/ng2articlechecks/**/*.spec.js'
		],
        welcomead: [
			'test/protractor-spec/welcomead/*pagecheck.spec.js',
            'test/protractor-spec/welcomead/**/*.spec.js'
		],
        pulse: [
			'test/protractor-spec/pulse/**/*.spec.js'
		],
        mediamanager: [
			'test/protractor-spec/mediamanager/**/*.spec.js'
		],
        videoseries: [
			'test/protractor-spec/videoseries/**/*.spec.js'
		]
	},
	specs: [
		'test/protractor-spec/global.spec.js',
//		'test/protractor-spec/article/*pagecheck.spec.js',
//		'test/protractor-spec/article/**/*.spec.js',
//		'test/protractor-spec/contrib/*pagecheck.spec.js',
//		'test/protractor-spec/contrib/**/*.spec.js',
//		'test/protractor-spec/csf/*pagecheck.spec.js',
//		'test/protractor-spec/csf/**/*.spec.js',
//      'test/protractor-spec/bvarticle/*pagecheck.spec.js',
//		'test/protractor-spec/bvarticle/**/*.spec.js',
//		'test/protractor-spec/channelsections/*pagecheck.spec.js',
//		'test/protractor-spec/channelsections/**/*.spec.js',
//		'test/protractor-spec/search/*pagecheck.spec.js',
//      'test/protractor-spec/search/**/*.spec.js', 
//      'test/protractor-spec/homepage/*pagecheck.spec.js',
//      'test/protractor-spec/homepage/**/*.spec.js',
//      'test/protractor-spec/angulargallery/*pagecheck.spec.js',
//      'test/protractor-spec/angulargallery/**/*.spec.js',
//      'test/protractor-spec/forbespress/**/*.spec.js',
//      'test/protractor-spec/amparticle/*pagecheck.spec.js',
//      'test/protractor-spec/amparticle/**/*.spec.js',
//      'test/protractor-spec/ampgallery/*pagecheck.spec.js',
//      'test/protractor-spec/ampgallery/**/*.spec.js',
//      'test/protractor-spec/ampvideo/*pagecheck.spec.js',
//      'test/protractor-spec/ampvideo/**/*.spec.js',
//      'test/protractor-spec/newsletters/*pagecheck.spec.js',
//      'test/protractor-spec/legacyarticle/**/*.spec.js',
//      'test/protractor-spec/legacyarticle/*pagecheck.spec.js',
//      'test/protractor-spec/listprofiles/**/*.spec.js',
//      'test/protractor-spec/listprofiles/*pagecheck.spec.js',
//      'test/protractor-spec/video/*pagecheck.spec.js',
//      'test/protractor-spec/articlescroll/**/*.spec.js',
//      'test/protractor-spec/mdotarticle/**/*.spec.js',
//      'test/protractor-spec/templatesgallery/**/*.spec.js',
//      'test/protractor-spec/ng2article/*pagecheck.spec.js',
//      'test/protractor-spec/ng2article/**/*.spec.js',
//      'test/protractor-spec/ng2brandvoicearticle/*pagecheck.spec.js',
//      'test/protractor-spec/ng2brandvoicearticle/**/*.spec.js',
//      'test/protractor-spec/ng2articlechecks/*pagecheck.spec.js',
//      'test/protractor-spec/ng2articlechecks/**/*.spec.js',
//      'test/protractor-spec/welcomead/**/*.spec.js',
//		'test/protractor-spec/pulse/**/*.spec.js',
//      'test/protractor-spec/mediamanager/**/*.spec.js',
//      'test/protractor-spec/videoseries/**/*.spec.js'
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
