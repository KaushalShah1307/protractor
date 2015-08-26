var CSFPage = require('./csf.page.js');
describe('csf -', function() {
	it('should not have 404 links', function(done) {
		var csfPage = new CSFPage();
		csfPage.get();
		globals.testAllLinks(done);
	});
});