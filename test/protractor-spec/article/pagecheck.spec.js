var ArticlePage = require('./article.page.js');
describe('article -', function() {
	it('should not have 404 links', function(done) {
		var articlePage = new ArticlePage();
		articlePage.get();
		globals.testAllLinks(done);
	});

	it('should have ads', function() {
		browser.executeAsyncScript(function() {
			callback = arguments[0];
			callback(Object.keys($('body').injector().get('ArticleAdsService').ad_slots));
		}).then(function(result) {
			result.forEach(function(key) {
				expect($$('#' + key + ' iframe').count()).toBeGreaterThan(0);
			})
			// console.log(result);
		})
	})

	it('should open the sidebar', function() {
		$('.article-comments').click()
		console.log("click");
		expect($('.article-sidebar-panel').getWidth()).toBe(390);
	})
});