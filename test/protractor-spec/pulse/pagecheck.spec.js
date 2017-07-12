var Pulse = require('./pulse.page.js'),
	pulse = new Pulse();

describe('Pulse - Cole Haan:', function() {
    
	it('should get the page', function() {
		pulse.get();
	});
    
    it('should have the header on the page', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the footer on the page', function() {
        expect(element(by.tagName('footer')).isPresent()).toBe(true); 
    });
    
    it('should have brandvoice blurb', function() {
        expect(element(by.css('.advoice-desc.initialized.ng-scope.ng-isolate-scope')).isDisplayed()).toBe(true); 
    });

	globals.generalCheck();
    globals.checkAds(pulse.adsService);
});