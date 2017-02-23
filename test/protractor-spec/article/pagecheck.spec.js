var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=beta-a');

describe('Article', function() {

/*	var ptor;

	beforeEach(function () {
//		ptor = protractor.getInstance();
		browser.get('/');
		ptor.manage().addCookie("forbesbeta", "A");
	});


	it('check if the cookie is set', function () {
		cookies = ptor.manage().getCookie("forbesbeta").then(function(data){
			console.log(data);
		});
	});
*/
	it('should get the page', function() {
		articlePage.get();
	});
/*    
    it('should have the title', function() {
        expect(browser.current_page.page_data.articles.article_0.article.title).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });
*/
	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
