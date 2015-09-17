var ContribPage = require('./contribhp.page.js'),
	contribPage = new ContribPage();
describe('ContribHP', function() {
	it('should get the page', function() {
		contribPage.get();
	});

	globals.generalCheck();

	globals.checkAds(contribPage.adsService);
});