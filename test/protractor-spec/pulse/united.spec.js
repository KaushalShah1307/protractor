var Pulse = require('./pulse.page.js'),
	pulse = new Pulse();

describe('Pulse - United:', function() {
    
	it('should get the page', function() {
        var url = 'https://www.forbes.com/united/street-to-street/';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the header on the page', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the footer on the page', function() {
        expect(element(by.tagName('footer')).isPresent()).toBe(true); 
    });
    
    it('should have brandvoice blurb', function() {
        expect(element(by.css('.advoice-desc.initialized.ng-scope.ng-isolate-scope')).isDisplayed()).toBe(true); 
    });

describe('Pulse - United:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Pulse:', function() {
		describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('http://www.forbes.com/united/street-to-street/');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/985544');
				expect(globals.getParam(trackingPixel.srcString, 'trl')).not.toBeNull();
			});
		});
        
		describe('Google Analytics', function() {
			var dataLayer;
			beforeAll(function() {
				browser.executeScript(function() {
					return dataLayer[0];
				}).then(function(result) {
					dataLayer = result;
				});
			});

			it('should pass the right custom parameters', function() {
                var sites = ['fdcmobile', 'fdc.forbes'];
                expect(sites).toContain(dataLayer.DFPSite);
                expect(dataLayer.DFPZone).toEqual('csf');
				expect(dataLayer.channel).toEqual('none');
                expect(dataLayer.section).toEqual('none');
                expect(dataLayer.brandVoice).toEqual('united');
                expect(dataLayer.bvProgramType).toEqual('special_feature');
                expect(dataLayer.brandVoiceLive).toEqual('true');
                expect(dataLayer.pageType).toEqual('csf');
                expect(dataLayer.primaryChannel).toEqual('none');
                expect(dataLayer.primarySection).toEqual('Street to Street');
				expect(dataLayer.slot).toEqual('unitedsf');
			});
		});
        
        describe('SimpleReach', function() {
            var reachpixel;
            
            beforeAll(function(done) {
                reachpixel = $('script#simplereach-script[src*="d8rk54i4mohrb.cloudfront.net"]');
                reachpixel.getAttribute('src').then(function(src) {
                    reachpixel.srcString = src;
                    done();
                });      
            });
            
            it('should load the SimpleReach script', function() {
                expect(reachpixel.length > 1);
            });
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-03-28T17:40:01.266Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('UnitedVoice: Street To Street'); 
                expect(browser.executeScript('return window.__reach_config.tags[0];')).toEqual('brandvoice'); 
                expect(browser.executeScript('return window.__reach_config.tags[1];')).toEqual('site::united'); 
                expect(browser.executeScript('return window.__reach_config.tags[2];')).toEqual('slot::unitedsf'); 
                expect(browser.executeScript('return window.__reach_config.tags[3];')).toEqual('type::special feature');
            });
            
        });
        
        describe('Comscore', function() {
            var comscorepixel;
            
            beforeAll(function(done) {
                comscorepixel = $('script[src*="b.scorecardresearch.com/beacon.js"]');
                comscorepixel.getAttribute('src').then(function(src) {
                    comscorepixel.srcString = src;
                    done();
                });      
            });
            
            it('should load the ComScore script', function() {
                expect(comscorepixel.length > 1);
            });
        });        
        
	});        
});
    globals.checkAds(pulse.adsService);
});