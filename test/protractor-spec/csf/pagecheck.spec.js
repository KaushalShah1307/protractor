var CSFPage = require('./csf.page.js');
describe('csf -', function() {
	var csfPage = new CSFPage();
	csfPage.get();
	globals.testAllLinks();
});