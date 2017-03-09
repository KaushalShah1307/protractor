var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=beta-a');

describe('Article', function() {

/*	beforeEach(function () {
//        var ptor;
//		ptor = protractor.getInstance();
//		browser.get('/');
		articlePage.get().manage().addCookie("forbesbeta", "A");
	});


	it('check if the cookie is set', function () {
		cookies = articlePage.get().manage().getCookie("forbesbeta").then(function(data){
			console.log(data);
		});
	});*/

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the title of the article', function() {
        expect(element(by.className('article-headline')).getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });

    it('should have page views on the article', function(){
        expect(element(by.className('view-count')).getText().length > 0); 
    });
    
    it('should have the body content', function() {
        expect(element(by.className('article-injected-body')).length > 0); 
    });
    
	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
