var CSFPage = require('./csf.page.js'),
	csfPage = new CSFPage();
describe('CSF:', function() {
	it('should get the page', function() {
		csfPage.get();
	});

	globals.generalCheck();

	globals.checkAds(csfPage.adsService);
});