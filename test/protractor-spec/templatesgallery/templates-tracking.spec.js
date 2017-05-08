/**
 * Created by kshah on 5/13/2016.
 */
xdescribe('Angular Gallery:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Galleries:', function() {
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
				//expect(globals.getParam(trackingPixel.srcString, 'su') + '/').toContain(currentUrl.replace(browser.baseUrl,"http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
				expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual(browser.current_page.page_data.displaySection);
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual(browser.current_page.page_data.authors[0].naturalId);
			});
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
			expect(dataLayer.DFPSite).toEqual('fdc.forbes' || 'fdcmobile');
			expect(dataLayer.DFPZone).toEqual('pictures');
			expect(dataLayer.author).toBe('Kurt Badenhausen');
			expect(dataLayer.channel).toEqual(browser.current_page.page_data.displayChannel);
            expect(dataLayer.section).toEqual(browser.current_page.page_data.displaySection);
			expect(dataLayer.edit).toEqual(browser.current_page.page_data.editorialSlot);
			expect(dataLayer.blogType).toEqual(browser.current_page.page_data.blogType);
			expect(dataLayer.contribType).toEqual(browser.current_page.page_data.authorType);
			expect(dataLayer.naturalID).toEqual('blogAndSlideId/blog/slide/985-20884');
			expect(dataLayer.pageTotal).toEqual('11');
			expect(dataLayer.site).toEqual('kurtbadenhausen');
			expect(dataLayer.hashtags).toEqual('none');
			expect(dataLayer.pageType).toEqual('slide');
			expect(dataLayer.primaryChannel).toEqual('Business');
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Kurt Badenhausen'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-08-12T14:00:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('1. Maria Sharapova'); 
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
