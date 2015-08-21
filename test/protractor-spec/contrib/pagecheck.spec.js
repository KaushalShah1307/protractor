var ContribPage = require('./contribhp.page.js');
describe('article -', function() {
	it('should not have 404 links', function() {
		var contribPage = new ContribPage();
		contribPage.get();
		globals.testAllLinks();
	});
});