describe('AMP Gallery:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on AMP Galleries:', function() {
		xdescribe('Fast Pixel', function() {
			
			it ('should have the correct parameters', function() {
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('ch=business');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('se=lewisdvorkinblog');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('pt=blog');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('i=blogAndPostId/blog/post/50-13891');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('au=blogAuthorId/blog/author/609');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('at=individual');
				expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pageview')).toContain('mb=t');
			});
		});

		describe('Google Analytics', function() {
            
			it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].author')).toEqual('Kurt Badenhausen');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].blogType')).toEqual('individual');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].brandVoice')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].brandVoiceLive')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].bvContentSource')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].bvLeftRailHeadline')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].bvProgramType')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].categories')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].channel')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].contribActive')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].contribDivision')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].contribType')).toEqual('Forbes Staff');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].dfpSite')).toEqual('fdcmobile');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].dfpZone')).toEqual('amp/pictures');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].editSlot')).toEqual('forbeslife');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].forbesOnTrump')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].hashtags')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].hashtagsTrending')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].heroImage')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].imageCount')).toEqual('0');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].leftRail')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].login')).toEqual('false');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].naturalID')).toEqual('blogAndSlideId/blog/slide/985-20884');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].pageTitle')).toEqual("The World's Highest-Paid Female Athletes 2015 - pg.1");
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].pageType')).toEqual('GoogleAMPSlide');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].pagination')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].primaryChannel')).toEqual('Business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].primarySection')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].publishDate')).toEqual('2015-08-12');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].section')).toEqual('kurtbadenhausenblog');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].site')).toEqual('kurtbadenhausen');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].slot')).toEqual('none');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[10].innerText))[0].videoPlacement')).toEqual('none');
                
			});
		});
        
        describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].authors[0]')).toEqual('Kurt Badenhausen');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].categories[0]')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].pid')).toEqual('50e4a8434240cf5c4b000009');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].published_at')).toEqual('2015-08-12T14:00:00Z');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].title')).toEqual('Check if this should be blank?');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[12].innerText))[0].tags.length')).toBe(12);          
			});
            
        });
        
        xdescribe('Comscore', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[14].innerText))[0].c2')).toEqual('6872493');
			});
            
        });
        
       xdescribe('Chartbeat', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].authors')).toEqual('Lewis DVorkin');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].domain')).toEqual('forbes.com');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].sections')).toEqual('business');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].uid')).toEqual('17493');
                expect(browser.executeScript('return window.Object.values(JSON.parse(window.document.scripts[11].innerText))[0].title')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever');
			});
            
        });
        
	});
});