var ContribPage = require('./contribhp.page.js');
describe('contribhp -', function() {
	it('should get the page', function() {
		var contribPage = new ContribPage();
		contribPage.get();
	});

	globals.testAllLinks();
});