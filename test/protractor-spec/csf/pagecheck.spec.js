var CSFPage = require('./csf.page.js'),
	csfPage = new CSFPage();
describe('CSF:', function() {
    
	it('should get the page', function() {
		csfPage.get();
	});
    
    it('should have the header on the page', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the footer on the page', function() {
        expect(element(by.tagName('footer')).isPresent()).toBe(true); 
    });

	globals.generalCheck();

	globals.checkAds(csfPage.adsService);
});