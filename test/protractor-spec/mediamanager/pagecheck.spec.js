var MediaManager = require('./mediamanager.page.js'),
	mediamanager = new MediaManager();

describe('Media Manager:', function() {
    
	it('should get the page', function() {
        mediamanager.get();
    });
    
    it('should have login module', function() {
        expect(element(by.css('.login-wrapper.ng-scope')).isDisplayed()).toBe(true); 
    });
    
    it('should login', function() {
        element(by.model('username')).sendKeys('testguy');
        element(by.model('password')).sendKeys('Forbes123');
        element(by.css('.button')).click();
    });
    
    it('should have header logo', function() {
        expect(element.all(by.css('.forbes-logo>a')).get(1).getText()).toEqual('Media Manager');
    });
});