var CSFPage = require('./csf.page.js');
describe('article -', function() {
	it('should not have 404 links', function() {
		var csfPage = new CSFPage();
		csfPage.get();
		globals.testAllLinks();
	});
});