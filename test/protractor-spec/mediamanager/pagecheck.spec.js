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
        
        it('should have the header', function() {
            expect(element(by.tagName('header')).isDisplayed()).toBe(true); 
        });
        
        it('should have forbes logo', function() {
            expect(element.all(by.css('.icon.icon-forbes-logo')).get(0).isDisplayed()).toBe(true); 
        });
    
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
    
    describe('Footer:', function() {
    
        it('should have the footer', function() {
            expect(element(by.tagName('footer')).isDisplayed()).toBe(true);
        });
        
        it('should have forbes logo', function() {
            expect(element.all(by.css('.icon.icon-forbes-logo')).get(1).isDisplayed()).toBe(true); 
        });
        
        it('should have copyright', function() {
            expect(element(by.css('.copy')).getText()).toEqual('2015 Forbes.com LLC™ All Rights Reserved'); 
        });
        
        it('should have footer links', function() {
            var links = ['Advertise', 'Forbes Press Room', 'Reprints & Permissions', 'Contact Us', 'Jobs At Forbes', 'Terms and Conditions', 'Help', 'Privacy Statement', 'AdChoices'];
        
            for(var i=0; i<9; i++) {
                expect(links).toContain(element.all(by.css('.footer-links>li>a')).get(i).getText());
            };
        });
    });    
});