/**
 * Created by kshah on 7/18/2016.
 */
var SearchPage = require('./search.page.js'),
	searchPage = new SearchPage();
describe('Search:', function() {
	it('should get the page', function() {
		searchPage.get();
	});
    
    it('should locate the search query input box', function() {
        this.searchBox = element(by.model('search_query'));
    });
    
    it('input text should be searchable', function() {
        element(by.model('search_query')).sendKeys('Lewis Dvorkin\n');
        expect(element(by.css('.fs-h2.entity-name.ng-binding')).getText()).toEqual('Lewis DVorkin');
    });
    
    it('hashtag should be there', function() {
       element(by.model('search_query')).clear();
       element(by.model('search_query')).sendKeys('#TrumpsAmerica\n');
       expect(element.all(by.css('.search-hashtag.ng-binding.ng-scope')).first().getText()).toEqual('#TrumpsAmerica');
    });
    
    it('should have mnet unit hardcoded on Mobile-Only', function() {
        var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");
        if (isMobile===true) {
           var mnet = element(by.id('_mN_dy_196542559'));
           expect(browser.isElementPresent(mnet)).toBe(true);
        } else if (isMobile===false) {
           expect(browser.isElementPresent(mnet)).toBe(true);
        }
    });

	//globals.generalCheck();

	globals.checkAds(searchPage.adsService);
});
