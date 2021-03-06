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
			
            it('should have the correct parameters', function() {
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].at')).toEqual('ad');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].au')).toEqual('blogAuthorId/blog/author/1965859');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].ch')).toEqual('business');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].i')).toEqual('blogAndPostId/blog/post/4248-455');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].mb')).toEqual('f');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].pt')).toEqual('blog');
				expect(browser.executeScript('return window.trackingService.trackingCalls[0]["fast"].su')).toContain('www.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/');
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
				expect(dataLayer.author).toEqual('qualityassuranceguest');
				expect(dataLayer.blogType).toEqual('ad');
				expect(dataLayer.brandVoice).toEqual('qualityassurance');
				expect(dataLayer.brandVoiceLive).toEqual('true');
				expect(dataLayer.bvContentSource).toEqual('forbes');
				expect(dataLayer.bvLeftRailHeadline).toEqual('none');
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('qualityassuranceguest'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4248-455'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2008-03-09T22:28:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
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
