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
            
			it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].author')).toEqual('Lewis DVorkin');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].blogType')).toEqual('individual');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].brandVoice')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].brandVoiceLive')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvContentSource')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvLeftRailHeadline')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvProgramType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].categories')).toEqual('Business,Entrepreneurs,Leadership,Management,Media & Entertainment,Social Media,Tech');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].channel')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribActive')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribDivision')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribType')).toEqual('Forbes Staff');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].dfpSite')).toEqual('fdcmobile');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].dfpZone')).toEqual('amp/article');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].editSlot')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].forbesOnTrump')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].hashtags')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].hashtagsTrending')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].heroImage')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].imageCount')).toEqual('3');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].leftRail')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].login')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].naturalID')).toEqual('blogAndPostId/blog/post/50-13891');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pageTitle')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pageType')).toEqual('GoogleAMP');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pagination')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].primaryChannel')).toEqual('Business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].primarySection')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].publishDate')).toEqual('2015-06-10');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].section')).toEqual('lewisdvorkinblog');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].site')).toEqual('lewisdvorkin');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].slot')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].videoPlacement')).toEqual('none');
                
			});
		});
        
        describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].authors[0]')).toEqual('Lewis DVorkin');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].categories[0]')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].pid')).toEqual('50e4a8434240cf5c4b000009');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].published_at')).toEqual('2015-06-10T14:00:00Z');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].title')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].tags.length')).toBe(13);
                
			});
            
        });
        
        xdescribe('Comscore', function() {
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