var ArticlePage = require('./article.page.js');
describe('article -', function() {
	// it('should not have 404 links', function() {
		var articlePage = new ArticlePage();
		articlePage.get();
		globals.testAllLinks();
	// });
});