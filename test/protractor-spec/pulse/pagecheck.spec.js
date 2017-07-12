var Pulse = require('./pulse.page.js'),
	pulse = new Pulse();

describe('Pulse - BrandVoice Special Features:', function() {
    
	it('should get the page', function() {
		pulse.get();
	});
    
    it('should have the header on the page', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the footer on the page', function() {
        expect(element(by.tagName('footer')).isPresent()).toBe(true); 
    });

	globals.generalCheck();
});