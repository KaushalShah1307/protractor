describe('NG2 Article:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Articles:', function() {
		describe('Fast Pixel', function() {
			
            it('should have the correct parameters', function() {
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].at')).toEqual('individual');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].au')).toEqual('blogAuthorId/blog/author/609');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].ch')).toEqual('business');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].i')).toEqual('blogAndPostId/blog/post/50-13891');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].mb')).toEqual('f');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].pt')).toEqual('blog');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].su')).toContain('www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/');
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
                expect(dataLayer.DFPSite).toEqual('fdc.forbes');
                expect(dataLayer.DFPZone).toEqual('article-d');
				expect(dataLayer.author).toEqual('Lewis DVorkin');
				expect(dataLayer.blogType).toEqual('individual');
				expect(dataLayer.categories).toEqual('Business,Media & Entertainment,Tech,Social Media,Entrepreneurs,Management,Leadership');
				expect(dataLayer.channel).toEqual('business');
				expect(dataLayer.contentTitle).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
				expect(dataLayer.contribActive).toEqual('false');
				expect(dataLayer.contribType).toEqual('Forbes Staff');
				expect(dataLayer.edit).toEqual('none');
				expect(dataLayer.forbesOnTrump).toEqual('false');
				expect(dataLayer.leftRail).toEqual('true');
				expect(dataLayer.naturalID).toEqual('blogAndPostId/blog/post/50-13891');
                expect(dataLayer.section).toEqual('lewisdvorkinblog');
                expect(dataLayer.hashtags).toEqual('none');
				expect(dataLayer.slot).toEqual('none');
				expect(dataLayer.site).toEqual('lewisdvorkin');
				expect(dataLayer.primaryChannel).toEqual('Business');
				expect(dataLayer.primarySection).toEqual('none');
                expect(dataLayer.doNotPaginate).toEqual('donotpaginate');	
                expect(dataLayer.imageCount).toEqual('3');	
                expect(dataLayer.leftRail).toEqual('true');	
                //expect(dataLayer.login).toEqual('false');	//re-enable this when the bug to add the param has been pushed out
			});
		});
        
        describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Lewis DVorkin'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-06-10T14:00:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(13); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
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
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.authors')).toEqual('Lewis DVorkin');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.domain')).toEqual('forbes.com');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.mabServer')).toEqual('mabping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.path')).toEqual('/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.pingServer')).toEqual('ping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.sections')).toEqual('business');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.title')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.uid')).toBe(17493);
            });
        });
        
	});
});
