describe('Simple Series Playlist:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking:', function() {
		xdescribe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/');
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.blogType);
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual(browser.current_page.page_data.authors[0].naturalId);
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
                expect(dataLayer.DFPZone).toEqual('series');
                expect(dataLayer.author).toEqual('none');
				expect(dataLayer.channel).toEqual('video');
				expect(dataLayer.section).toEqual('series');
				expect(dataLayer.naturalID).toEqual('none');
				expect(dataLayer.primaryChannel).toEqual('video');
				expect(dataLayer.primarySection).toEqual('series');
                expect(dataLayer.pageType).toEqual('video');
                expect(dataLayer.slot).toEqual('capone');
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
        
        describe('Chartbeat', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.authors')).toEqual('');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.domain')).toEqual('forbes.com');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.mabServer')).toEqual('mabping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.path')).toEqual('/series/capitalonesparkvoice/');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.pingServer')).toEqual('ping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.sections')).toEqual('video,capone');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.title.length')).toBeGreaterThan(0);
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.uid')).toBe(17493);
            });
        });
        
	});
});
