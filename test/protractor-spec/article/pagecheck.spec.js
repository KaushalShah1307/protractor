var ArticlePage = require('./article.page.js');
describe('article -', function() {
	beforeEach(function() {
		jasmine.addMatchers({
			toHaveAd: globals.matchers.toHaveAd
		});
	});

	it('should get the page', function() {
		var articlePage = new ArticlePage();
		articlePage.get();
	});

	it('should have ads', function() {
		browser.executeAsyncScript(function() {
			callback = arguments[0];
			callback(Object.keys($('body').injector().get('ArticleAdsService').ad_slots));
		}).then(function(result) {
			result.forEach(function(key) {
				expect(key).toHaveAd();
			});
		});
	});

	it('should open the sidebar', function() {
		var commentsTrigger = $('.article-comments'),
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');

		console.log(commentsTrigger.click, commentsPanel.isDispalyed);
		expect(commentsPanel.isDisplayed()).toBe(false);
		commentsTrigger.click();
		console.log(commentsTrigger.click, commentsPanel.isDispalyed);
		expect(commentsPanel.isDispalyed()).toBe(true);
		commentsTrigger.click();
		expect(commentsPanel.isDisplayed()).toBe(false);
	});

	globals.testAllLinks();
});