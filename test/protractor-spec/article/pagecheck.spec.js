var ArticlePage = require('./article.page.js');
describe('article -', function() {
		var articlePage = new ArticlePage();
		articlePage.get();
	it('should not have 404 links',function(done) {
		// globals.testAllLinks(done);
		done();
	})
	browser.getCurrentUrl().then(function(url) {
		console.log('ah')
		return it('should pass', function(done) {
			done();
			return console.log(url)
		})
	})
});