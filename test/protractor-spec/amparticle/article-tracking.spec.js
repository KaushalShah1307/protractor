describe('AMP Article:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on AMP Articles:', function() {
/*		describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.blogType);
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual(browser.current_page.page_data.authors[0].naturalId);
			});
		});
*/
		describe('Google Analytics', function() {
            
			beforeAll(function() {
			});

			it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].authors[0]')).toEqual('Lewis DVorkin');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].categories[0]')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].pid')).toEqual('50e4a8434240cf5c4b000009');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].published_at')).toEqual('2015-06-10T14:00:00Z');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].title')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].tags.length')).toBe(13);
                
			});
		});
 /*       
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Lewis DVorkin'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-06-10T14:00:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
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
*/        
	});
});