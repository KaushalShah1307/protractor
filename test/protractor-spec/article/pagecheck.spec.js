var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/gordonkelly/2015/09/19/apple-ios-9-secrets/');

describe('Article', function() {

	var ptor;

	beforeEach(function () {
		ptor = protractor.getInstance();
		browser.get('/');
		ptor.manage().addCookie("forbesbeta", "A");
	});


	it('check if the cookie is set', function () {
		cookies = ptor.manage().getCookie("forbesbeta").then(function(data){
			console.log(data);
		});
	});

	it('should get the page', function() {
		articlePage.get();
	});

	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
