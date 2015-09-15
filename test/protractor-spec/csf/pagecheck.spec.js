var CSFPage = require('./csf.page.js'),
	csfPage = new CSFPage();
describe('CSF', function() {
	describe('General-', function() {
		beforeAll(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			csfPage.get();
		});

		globals.generalCheck();

		globals.checkAds(csfPage.adsService);
	});
});