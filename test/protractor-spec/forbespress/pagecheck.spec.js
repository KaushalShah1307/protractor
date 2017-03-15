var ForbesPress = require('./forbespress.page.js'),
	forbesPress = new ForbesPress();
describe('ForbesPress Dashboard', function() {
	it('should get the page', function() {
		forbesPress.get();
	});
    
    it('should have the ForbesPress logo', function() {
        expect(element(by.className('logo')).getText().length > 0); 
    });
    
    it('should have the copyright module', function() {
        expect(element(by.className('copyright')).getText().length > 0); 
    });
    
    it('should land on the dashboard page', function() {
        expect(browser.getCurrentUrl()).toEqual('https://www-staging.forbes.com/forbespress/#/dashboard'); 
    });
    
    it('should have the create story button', function() {
        expect(element(by.className('fp-button button-new'))).toBeTruthy();
    });
    
    it('should click on the first headline', function() {
        var headLine = element(by.className('headline'));
        var dashbaordArticleTitle = element(by.className('title truncate')).getText();
        expect(dashbaordArticleTitle) > 0;
        headLine.click();
    });

	//globals.generalCheck();
});

describe('ForbesPress Article Page', function() {
    it('should load the article page', function() {
        expect(browser.getCurrentUrl()).toContain('compose?id=');
        expect(element(by.className('title fs-headline headline-input'))).toBeTruthy(); 
    });
});