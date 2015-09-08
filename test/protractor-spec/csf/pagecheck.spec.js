var CSFPage = require('./csf.page.js');
describe('csf -', function() {
	it('should get the page', function() {
		var csfPage = new CSFPage();
		csfPage.get();
	});

	globals.testAllLinks();
});