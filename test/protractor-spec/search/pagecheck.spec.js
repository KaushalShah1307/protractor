/**
 * Created by kshah on 7/18/2016.
 */
var SearchPage = require('./search.page.js'),
	searchPage = new SearchPage();
describe('Search', function() {
	it('should get the page', function() {
		searchPage.get();
	});

	globals.generalCheck();

	globals.checkAds(searchPage.adsService);

	it('should search for the input text', function(){
		/* Adding a delay for the page to load properly */
		browser.sleep(1000);
		element(by.id('search-form')).sendKeys('GoSoccer');
		$('[type="submit"]').click();
	});
});
