var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/');

describe('Article', function() {
	describe('General-', function() {
		beforeAll(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			articlePage.get();
		});

		globals.generalCheck();

		globals.checkAds(articlePage.adsService);
	});
});