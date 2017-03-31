var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/ibm/2017/03/30/how-cdos-can-use-cognitive-computing-to-transform-their-businesses-qa/?view=beta-a');

describe('BrandVoice Article', function() {

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the title of the article', function() {
        expect(element(by.className('article-headline')).getText()).toEqual('How CDOs Can Use Cognitive Computing To Transform Their Businesses {Q&A}'); 
    });

    it('should have page views on the article', function(){
        expect(element(by.className('view-count')).getText().length >= 186); 
    });
    
    it('should have the eye icon next to page views', function() {
        expect(element(by.css('.icon.icon-preview-eye')).isDisplayed()).toBeTruthy(); 
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
    
	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
