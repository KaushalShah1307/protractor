describe('AMP Video:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on AMP Video:', function() {
		describe('Fast Pixel', function() {
			
			it('should have the correct parameters', function() {
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('ch=');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('se=');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('pt=video');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('i=video/brightcove/5194688673001');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('au=');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('at=');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('mb=t');
			});
		});

		describe('Google Analytics', function() {
            
			it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].author')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].blogType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].brandVoice')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].brandVoiceLive')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvContentSource')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvLeftRailHeadline')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].bvProgramType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].categories')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].channel')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribActive')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribDivision')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].contribType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].dfpSite')).toEqual('fdcmobile');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].dfpZone')).toEqual('amp/video');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].editSlot')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].forbesOnTrump')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].hashtags')).toEqual('GamingSales');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].hashtagsTrending')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].heroImage')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].imageCount')).toEqual('0');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].leftRail')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].login')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].naturalID')).toEqual('video/brightcove/5194688673001');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pageTitle')).toEqual('Stan Lee Introduces Augmented Reality For His Kids Universe');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pageType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].pagination')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].primaryChannel')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].primarySection')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].publishDate')).toEqual('2016-11-03');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].section')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].site')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].slot')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[13].innerText))[0].videoPlacement')).toEqual('none');
                
			});
		});
        
        describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].authors[0]')).toEqual('');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].categories[0]')).toEqual('');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].pid')).toEqual('50e4a8434240cf5c4b000009');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].published_at')).toEqual('2016-11-03T22:49:30Z');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].title')).toEqual('Check if this is suppose to be blank?');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[15].innerText))[0].tags.length')).toBe(3);          
			});
            
        });
        
        describe('Comscore', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[14].innerText))[0].c2')).toEqual('6872493');
			});
            
        });
        
        describe('Chartbeat', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].authors')).toEqual('');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].domain')).toEqual('forbes.com');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].sections')).toEqual('');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].uid')).toEqual('17493');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].title')).toEqual('Stan Lee Introduces Augmented Reality For His Kids Universe');
			});
            
        });
        
	});
});