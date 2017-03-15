var ForbesPress = require('./forbespress.page.js'),
	forbesPress = new ForbesPress();
describe('ForbesPress', function() {
	it('should get the page', function() {
		forbesPress.get();
	});
    
    it('should have the ForbesPress logo', function() {
        expect(element(by.className('logo')).getText().length > 0); 
    });

	//globals.generalCheck();
});