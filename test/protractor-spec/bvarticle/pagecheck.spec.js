var BVArticlePage = require('./article.page.js'),
	bvArticlePage = new BVArticlePage('/sites/ibm/2017/03/30/how-cdos-can-use-cognitive-computing-to-transform-their-businesses-qa/');

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
    
    // this case checks for the author name on BV.
/*    it('should have the BV Contrib name', function() {
        expect(element(by.className('name-desc')).getText()).toEqual('IBM Contributor, IBM'); 
    });
*/    
	globals.generalCheck();
	globals.checkAds(bvArticlePage.adsService);
});
