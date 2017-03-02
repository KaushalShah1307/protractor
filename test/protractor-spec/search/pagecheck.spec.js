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
    
    it('input text should be searchable', function() {
        element(by.model('search_query')).sendKeys('Lewis Dvorkin\n');
        //var item = element(by.repeater('search_results'));
        expect(element(by.className('fs-h2 entity-name')).getText()).toEqual('Lewis DVorkin');
    });

	globals.generalCheck();

	globals.checkAds(searchPage.adsService);
});
