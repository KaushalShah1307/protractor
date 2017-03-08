var ContribPage = require('./contribhp.page.js'),
	contribPage = new ContribPage();
describe('ContribHP', function() {
	it('should get the page', function() {
		contribPage.get();
	});
    
    it('should have pageviews in the stream', function() {
        expect(element(by.className('article-views')).getText().length > 0); 
    });
    
    it('should have the About section', function() {
        expect(element(by.className('author-description')).getText().length > 0); 
    });

	globals.generalCheck();

	globals.checkAds(contribPage.adsService);
});