var AMPArticle = require('./amparticle.page.js'),
	ampArticle  = new AMPArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('AMP Article Page', function() {
    
	it('should get the page', function() {
		ampArticle.get();
	});
    
    it('should have the forbes logo in the header', function() {
        expect(element(by.className('forbes-logo'))).toBeTruthy(); 
    });
    
    it('should have the article headline', function() {
        expect(element(by.css('.article-header.inner-contain>h1')).getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });
    
    it('should have the contributors name and type', function() {
        expect(element(by.className('user')).getText()).toEqual('Lewis DVorkin , FORBES STAFF'); 
    });
    
    it('should have the hashtag', function() {
        expect(element(by.className('hashtag')).getText()).toEqual('#boxoffice'); 
    });
    
    it('should have the channel/section assigned', function() {
        expect(element(by.className('crumb')).getText()).toEqual('Business'); 
    });
    
    it('should have the article body', function() {
        expect(element(by.className('article-body')).getText().length > 0); 
    });
    
    it('should have the recommended module', function() {
        expect(element(by.className('article-vp'))).toBeTruthy(); 
    });
    
    it('should have the article stream', function() {
        expect(element(by.className('article-stream'))).toBeTruthy(); 
    });
    
    it('should have the footer', function() {
        expect(element(by.className('article-footer'))).toBeTruthy(); 
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.window.ampAdSlotIdCounter;')).toEqual(9);
    });
    
    it('should have the share icon in the header', function() {
        var shareIcon = element(by.className('share-icon'));
        var closeButton = element(by.css('.close-button-wrapper'));
        expect(shareIcon).toBeTruthy();
        shareIcon.click();
        expect(element(by.className('lightbox'))).toBeTruthy();
        //closeButton.click();
    });
    
//	globals.generalCheck();

//	globals.checkAds(ampArticle.adsService);
});