describe('BrandVoice Article', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Articles:', function() {
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
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.blogType);
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
				expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual(browser.current_page.page_data.displaySection);
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
                //expect((dataLayer.DFPSite).toEqual('fdc.forbes') || (dataLayer.DFPSite).toEqual('fdcmobile'));
                expect(dataLayer.DFPZone).toEqual('article-d');
				expect(dataLayer.author).toEqual('IBM Contributor');
				expect(dataLayer.channel).toEqual('leadership');
                expect(dataLayer.section).toEqual('ibmblog');
                expect(dataLayer.hashtags).toEqual('LikeABoss');
				expect(dataLayer.slot).toEqual('ibm');
				expect(dataLayer.site).toEqual('ibm');
				expect(dataLayer.blogType).toEqual('ad');
				expect(dataLayer.brandVoiceLive).toEqual('true');
				expect(dataLayer.bvContentSource).toEqual('none');
				expect(dataLayer.bvProgramType).toEqual('elite');
				expect(dataLayer.categories).toEqual('Leadership');
				expect(dataLayer.contribActive).toEqual('true');
				expect(dataLayer.contribDivision).toEqual('none');
				expect(dataLayer.contribType).toEqual('AdVoice');
                expect(dataLayer.doNotPaginate).toEqual('none');
                expect(dataLayer.naturalID).toEqual('blogAndPostId/blog/post/2729-3427');
                expect(dataLayer.paragraphs).toEqual('17');
                expect(dataLayer.primaryChannel).toEqual('Leadership');
                expect(dataLayer.primarySection).toEqual('none');
                expect(dataLayer.publishHour).toEqual('09');
                expect(dataLayer.published).toEqual('2017-03-30');
                expect(dataLayer.trendingHashtags).toEqual('none'); 
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('IBM Contributor'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('leadership'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-03-30T13:30:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('How CDOs Can Use Cognitive Computing To Transform Their Businesses {Q&A}'); 
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
