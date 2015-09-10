var ArticlePage = require('./article.page.js');
describe('Article', function() {
	describe('General-', function() {
		beforeEach(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			var articlePage = new ArticlePage('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/');
			articlePage.get();
		});

		globals.testAllLinks();

		describe('Ads', function() {
			it('should appear on the page', function() {
				browser.executeAsyncScript(function() {
					callback = arguments[0];
					callback(Object.keys($('body').injector().get('ArticleAdsService').ad_slots));
				}).then(function(result) {
					result.forEach(function(key) {
						expect(key).toHaveAd();
					});
				});
			});
		});
	});
});