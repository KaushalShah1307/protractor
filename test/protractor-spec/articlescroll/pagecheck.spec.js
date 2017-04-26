var ArticlePageScroll = require('./articlescroll.page.js'),
	articlePageScroll = new ArticlePageScroll('/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=prod');

describe('Article:', function() {

	it('should get the page', function() {
		articlePageScroll.get();
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
        expect(element(by.className('icon icon-staff-verified')).isPresent()).toBe(true); 
    });
    
	//globals.generalCheck();
	globals.checkAds(articlePageScroll.adsService);
});
 
        
describe('Article Page Scroll:', function() {

    it('should scroll to the next article', function() {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
        expect(browser.getCurrentUrl()).not.toEqual(browser.current_page.page_data.uri);
        }); 
    });
    
    it('should have the title of the 2nd article in the stream', function() {
        var firstArticleTitle = 'Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever';
        expect(element.all(by.css('.article-headline.ng-binding')).get(1).getText()).not.toEqual(firstArticleTitle);
    });

});