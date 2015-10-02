var CSRPage = require('./csr.page.js'),
	csrPage = new CSRPage();
describe('CSR', function() {
	it('should get the page', function() {
		csrPage.get();
	});

	globals.generalCheck();

	globals.checkAds(csrPage.adsService);
});