var ContribPage = require('./contribhp.page.js');
describe('contribhp -', function() {
	it('should not have 404 links', function(done) {
		var contribPage = new ContribPage();
		contribPage.get();
		globals.testAllLinks(done);
	})
});