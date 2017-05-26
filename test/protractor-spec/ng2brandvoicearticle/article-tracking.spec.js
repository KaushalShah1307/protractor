describe('NG2 BrandVoiceArticle:', function() {
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

			xit('should have the correct parameters', function() {
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
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
                expect(dataLayer.DFPSite).toEqual('fdc.forbes');
                expect(dataLayer.DFPZone).toEqual('article-d-delta-u');
				expect(dataLayer.author).toEqual('qualityassuranceguest');
				expect(dataLayer.blogType).toEqual('ad');
				expect(dataLayer.brandVoice).toEqual('qualityassurance');
				expect(dataLayer.brandVoiceLive).toEqual('true');
				expect(dataLayer.bvContentSource).toEqual('forbes');
				expect(dataLayer.bvLeftRailHeadline).toEqual('recommend');
				expect(dataLayer.bvProgramType).toEqual('elite');
				expect(dataLayer.categories).toEqual('Tech,The Tech Life');
				expect(dataLayer.channel).toEqual('business');
				expect(dataLayer.contribActive).toEqual('false');
				expect(dataLayer.contribDivision).toEqual('none');
				expect(dataLayer.contribType).toEqual('AdVoice');
				expect(dataLayer.edit).toEqual('none');
				expect(dataLayer.forbesOnTrump).toEqual('false');
				expect(dataLayer.heroImage).toEqual('false');
				expect(dataLayer.imageCount).toEqual('2');
				expect(dataLayer.leftRail).toEqual('true');
				expect(dataLayer.naturalID).toEqual('blogAndPostId/blog/post/4248-455');
				expect(dataLayer.pageNumber).toEqual('1');
				expect(dataLayer.pageTotal).toEqual('1');
				expect(dataLayer.pageType).toEqual('blog:standard');
				expect(dataLayer.paragraphs).toEqual('16');
                expect(dataLayer.section).toEqual('none');
                expect(dataLayer.hashtags).toEqual('none');
                expect(dataLayer.trendingHashtags).toEqual('none');
                expect(dataLayer.videoPlacement).toEqual('none');
				expect(dataLayer.slot).toEqual('qualityassuranceslot');
				expect(dataLayer.site).toEqual('qualityassurance');
				expect(dataLayer.primaryChannel).toEqual('Tech');
				expect(dataLayer.primarySection).toEqual('The Tech Life');
                expect(dataLayer.doNotPaginate).toEqual('none');	
                expect(dataLayer.login).toEqual('false');
			});
		});
        
        describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('qualityassuranceguest'); 
                expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4248-455'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2008-03-09T22:28:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('000000000000000000000000'); 
                expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(4); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Testing Angular JS apps with Protractor'); 
                expect(browser.executeScript('return window.__reach_config.url;')).toEqual('https://www.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/'); 
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
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.authors')).toEqual('qualityassuranceguest');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.domain')).toEqual('forbes.com');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.mabServer')).toEqual('mabping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.path')).toEqual('/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.pingServer')).toEqual('ping.chartbeat.net');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.sections')).toEqual('business,qualityassuranceslot');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.title')).toEqual('Quality AssuranceVoice: Testing Angular JS apps with Protractor');
                expect(browser.executeScript('return window.trackingService.chartbeatService.sfAsyncConfig.uid')).toBe(17493);
            });
        });
        
	});
});
