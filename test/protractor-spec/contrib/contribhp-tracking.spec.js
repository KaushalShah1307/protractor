describe('ContribHP:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Contributor Homepage:', function() {
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
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('ad');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAuthorId/blog/author/blog-2577');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('ad');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
                expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual('northwesternmutualblog');
                expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/blog-2577');
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
                expect(dataLayer.DFPZone).toEqual('contribhome');
				expect(dataLayer.author).toEqual('Northwestern Mutual');
				expect(dataLayer.channel).toEqual('business');
                expect(dataLayer.section).toEqual('northwesternmutualblog');
                expect(dataLayer.brandVoice).toEqual('northwesternmutual');
                expect(dataLayer.brandVoiceLive).toEqual('true');
                expect(dataLayer.contribType).toEqual('AdVoice');
                expect(dataLayer.pageType).toEqual('contrib');
                expect(dataLayer.primaryChannel).toEqual('Investing');
                expect(dataLayer.primarySection).toEqual('none');
				expect(dataLayer.slot).toEqual('nwmf');
				expect(dataLayer.site).toEqual('northwesternmutual');

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
                expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Northwestern Mutual'); 
                expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2013-03-19T18:40:15.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Northwestern MutualVoice - We help you Live Life Differently.');
                expect(browser.executeScript('return window.__reach_config.tags[0];')).toEqual('brandvoice'); 
                expect(browser.executeScript('return window.__reach_config.tags[1];')).toEqual('site::northwesternmutual'); 
                expect(browser.executeScript('return window.__reach_config.tags[2];')).toEqual('slot::nwmf'); 
                expect(browser.executeScript('return window.__reach_config.tags[3];')).toEqual('type::author homepage');
                expect(browser.executeScript('return window.__reach_config.url;')).toEqual('https://www.forbes.com/sites/northwesternmutual/');
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

