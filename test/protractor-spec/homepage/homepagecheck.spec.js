var HomePage = require('./home.page.js'),
	homePage = new HomePage();
describe('Home Page Redesign', function() {
	it('should get the page', function() {
		homePage.get();
	});

//	globals.generalCheck();

	globals.checkAds(homePage.adsService);
});