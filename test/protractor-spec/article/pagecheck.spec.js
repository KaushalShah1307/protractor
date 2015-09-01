var ArticlePage = require('./article.page.js');
describe('article -', function() {
	it('should not have 404 links', function(done) {
		var articlePage = new ArticlePage();
		articlePage.get();
		globals.testAllLinks(done);
	});

	it('should have ads', function() {
		globals.getModule('ArticleAdsService').then(function(aas) {
			console.log(aas);
		})
		// console.log(browser.rootEl);
		$(".article-headline").evaluate('article.article').then(function(res) {
			console.log('ad slots',res);
		});
		expect($$('.top-ad iframe').count()).toBeGreaterThan(0);
	})

	it('should open the sidebar', function() {
		$('.article-comments').click()
		console.log("click");
		expect($('.article-sidebar-panel').getWidth()).toBe(390);
	})
});