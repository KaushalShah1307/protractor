var ArticlePage = require('./article.page.js');
describe('article -', function() {
	var articlePage = new ArticlePage();
	articlePage.get();
	globals.testAllLinks();
});