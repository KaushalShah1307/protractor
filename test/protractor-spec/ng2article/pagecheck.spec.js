var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage();

describe('NG2 Article:', function() {

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the beta flag', function() {
        expect(element.all(by.className('beta fs-text-s')).isPresent()).toBe(true); 
    });
    
    it('should have the title of the article', function() {
        expect(element.all(by.className('fs-headline')).first().getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
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
    
	globals.generalCheck();
	//globals.checkAds(articlePage.adsService);
});