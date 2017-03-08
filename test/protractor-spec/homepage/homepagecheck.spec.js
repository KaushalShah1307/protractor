var HomePage = require('./home.page.js'),
	homePage = new HomePage();
describe('Home Page', function() {
	it('should get the page', function() {
		homePage.get();
	});

	globals.generalCheck();

	globals.checkAds(csfPage.adsService);
});