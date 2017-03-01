/**
 * Created by kshah on 7/18/2016.
 */
var SearchPage = require('./search.page.js'),
	searchPage = new SearchPage();
describe('Search', function() {
	it('should get the page', function() {
		searchPage.get();
	});
    
    it('should locate the search query input box', function() {
        this.searchBox = element(by.model('search_query'));
    });
    
/*    it('input text should be searched', function() {
        this.searchBox.click();
        this.searchBox.clear();
        this.searchBox.sendKeys('Lewis Dvorkin');
        //expect(browser.getCurrentUrl).toEqual('https://www.forbes.com/search/?q=Lewis%20Dvorkin');
    });*/

	globals.generalCheck();

	globals.checkAds(searchPage.adsService);
});
