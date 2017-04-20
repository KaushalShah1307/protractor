describe('CSR:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Channel/Section:', function() {
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
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toMatch(currentUrl.replace(browser.baseUrl,'http://www-staging.forbes.com/'));
				//expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				//expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				//expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.authorType);
				//expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);3
                //expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual(browser.current_page.page_data.displaySection);
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
                //(expect(dataLayer.DFPSite).toMatch('fdc.forbes' || 'fdcmobile'));
                expect(dataLayer.DFPZone).toEqual('channel');
				expect(dataLayer.channel).toEqual('none');
                expect(dataLayer.section).toEqual('none');
                expect(dataLayer.brandVoice).toEqual('none');
                expect(dataLayer.brandVoiceLive).toEqual('none');
                expect(dataLayer.pageType).toEqual('csf');
                expect(dataLayer.primaryChannel).toEqual('Leadership');
                expect(dataLayer.primarySection).toEqual('none');
				expect(dataLayer.slot).toEqual('leadership');
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
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Forbes - Leadership Information and Leadership News - Forbes.com'); 
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