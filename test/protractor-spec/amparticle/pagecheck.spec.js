var AMPArticle = require('./amparticle.page.js'),
	ampArticle  = new AMPArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('AMP Article Page', function() {
	it('should get the page', function() {
		ampArticle.get();
	});
    
    it('should have the article headline', function() {
        expect(element(by.css('.article-header.inner-contain>h1')).getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });
    
    it('should have the contributors name and type', function() {
        expect(element(by.className('user')).getText()).toEqual('Lewis DVorkin , FORBES STAFF'); 
    });

//	globals.generalCheck();

//	globals.checkAds(ampArticle.adsService);
});