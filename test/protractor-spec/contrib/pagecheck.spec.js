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

		globals.testAllLinks();

		globals.testAllScripts();

		globals.testAllImages();

		globals.testAllBackgroundImages();

		globals.checkAds(contribPage.adsService);
	});
});