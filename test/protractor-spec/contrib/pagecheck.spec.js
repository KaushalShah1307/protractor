var ContribPage = require('./contribhp.page.js'),
	contribPage = new ContribPage();
describe('ContribHP', function() {
	describe('General-', function() {
		beforeAll(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			contribPage.get();
		});

		globals.generalCheck();

		globals.checkAds(contribPage.adsService);
	});
});