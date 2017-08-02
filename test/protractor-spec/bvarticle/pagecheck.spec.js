var BVArticlePage = require('./article.page.js'),
	bvArticlePage = new BVArticlePage('/sites/ibm/2017/03/30/how-cdos-can-use-cognitive-computing-to-transform-their-businesses-qa/?view=beta-u');

beforeAll(function() {
   browser.manage().addCookie({name: 'forbesbeta', value: 'A'}, {name: 'forbes_article', value: 'A'});
});

describe('BrandVoice Article', function() {

	it('should get the page', function() {
		bvArticlePage.get();
	});
    
    it('should have the title of the article', function() {
        expect(element.all(by.className('article-headline')).first().getText()).toEqual('How CDOs Can Use Cognitive Computing To Transform Their Businesses {Q&A}'); 
    });

    it('should have page views on the article', function(){
        expect(element.all(by.className('view-count')).first().getText().length >= 186); 
    });
    
    it('should have the eye icon next to page views', function() {
        expect(element.all(by.css('.icon.icon-preview-eye')).first().isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the body content', function() {
        expect(element(by.className('article-injected-body')).length > 0); 
    });
    
    it('should have the tweet quotes module', function() {
        expect(element(by.className('tweet-this'))).toBeTruthy(); 
    });
    
    it('should have the BrandVoice logo', function() {
        expect(element(by.className('brandvoice-logo')).isDisplayed()).toBeTruthy(); 
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
           expect(browser.isElementPresent(mnet)).toBe(false);
        }
    });
    
    // this case checks for the author name on BV.
/*    it('should have the BV Contrib name', function() {
        expect(element(by.className('name-desc')).getText()).toEqual('IBM Contributor, IBM'); 
    });
*/    
	//globals.generalCheck();
	globals.checkAds(bvArticlePage.adsService);
});
