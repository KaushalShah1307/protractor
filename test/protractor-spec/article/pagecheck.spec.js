var ArticlePage = require('./article.page.js');
describe('article -', function() {
	it('should not have 404 links',function(done) {
		var articlePage = new ArticlePage();
		articlePage.get();
		globals.testAllLinks(done);
	})
});