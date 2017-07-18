var MediaManager = require('./mediamanager.page.js'),
	mediamanager = new MediaManager();

describe('Media Manager:', function() {
    
	it('should get the page', function() {
        mediamanager.get();
    });
    
    describe('login:', function() {
    
        it('should have login module', function() {
            expect(element(by.css('.login-wrapper.ng-scope')).isDisplayed()).toBe(true); 
        });

        it('should login', function() {
            element(by.model('username')).sendKeys('testguy');
            element(by.model('password')).sendKeys('Forbes123');
            element(by.css('.button')).click();
        });
    });
    
    describe('Header:', function() {
    
        it('should have header logo', function() {
            expect(element.all(by.css('.forbes-logo>a')).get(1).getText()).toEqual('Media Manager');
        });

        it('should have Create Gallery link', function() {
            expect(element.all(by.css('.dam-links>ul>li>a')).get(0).getText()).toEqual('CREATE GALLERY');
        });

        it('should have My Images link', function() {
            expect(element.all(by.css('.dam-links>ul>li>a')).get(1).getText()).toEqual('MY IMAGES');
        });

        it('should have Log Out link', function() {
            expect(element.all(by.css('.dam-links>ul>li>a')).get(2).getText()).toEqual('LOG OUT');
        });
    });    
});