var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=prod');

describe('Article:', function() {

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the title of the article', function() {
        expect(element.all(by.className('article-headline')).first().getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });

    it('should have page views on the article', function(){
        expect(element.all(by.className('view-count')).first().getText()).toBeLessThanOrEqual('9,403'); 
    });
    
    it('should have the eye icon next to page views', function() {
        expect(element.all(by.css('.icon.icon-preview-eye')).first().isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the circ link', function() {
        expect(element(by.className('circ-link'))).toBeTruthy(); 
    });
    
    it('should have the body content', function() {
        expect(element(by.className('article-injected-body')).length > 0); 
    });
    
    it('should have the tweet quotes module', function() {
        expect(element(by.className('tweet-this'))).toBeTruthy(); 
    });
    
    it('should have the Forbes Staff icon next to the author type', function() {
        expect(element(by.className('icon icon-staff-verified'))).toBeTruthy(); 
    });
    
    it('captions should be italics', function() {
        var captions = element.all(by.css('.wp-caption-text')).first();
        expect(captions.getCssValue('font-style')).toEqual('italic');
    });
    
    it('should have the correct zone for ads', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('article-d-delta-u'); 
    });
    
    it('should have mnet unit hardcoded on Mobile-Only', function() {
        var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");
        if (isMobile===true) {
           var mnet = element(by.id('_mN_dy_547648363'));
           expect(browser.isElementPresent(mnet)).toBe(true);
        } else if (isMobile===false) {
           expect(browser.isElementPresent(mnet)).toBe(true);
        }
    });
    
	//globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});