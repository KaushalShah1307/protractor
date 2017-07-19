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
    
    describe('Search:', function() {
    
        it('should have the search bar', function() {
            expect(element(by.css('.search-bar')).isDisplayed()).toBe(true);
        });
        
        it('should have Galleries as an option', function() {
            expect(element(by.css('.switch-label.switch-label-off.active')).isDisplayed()).toBe(true); 
        });
        
        it('should have Images as an option', function() {
            expect(element(by.css('.switch-label.switch-label-on.not-active')).isDisplayed()).toBe(true); 
        });
        
        it('should have Date Picker option', function() {
            var dateGear = element(by.css('.icon.icon-cog'));
            var startDate = element(by.css('.date-picker-group.start-date'));
            var endDate = element(by.css('.date-picker-group.end-date'));
            var datePicker = element(by.css('.pickadate'));
            expect(dateGear.isDisplayed()).toBe(true);
            dateGear.click();
            expect(startDate.isDisplayed()).toBe(true);
            startDate.click();
            expect(datePicker.isDisplayed()).toBe(true);
            endDate.click();
            expect(element(by.css('.pickadate')).isDisplayed()).toBe(true);
            dateGear.click();
        });
    });
    
    describe('Recent Galleries:', function() {
    
        it('should have recent galleries', function() {
            expect(element.all(by.css('.section-title')).get(1).getText()).toEqual('Recent Galleries'); 
        });
        
        it('should have gallery carousel', function() {
            var galleries = element.all(by.repeater('gallery in galleryList'));
            expect(galleries.count()).toBeGreaterThanOrEqual(4);
        });
        
        it('should click next on gallery carousel', function() {
            var next = element(by.css('.arrow.arrow-next'));
            next.click();
            var galleries = element.all(by.repeater('gallery in galleryList'));
            expect(galleries.count()).toBeGreaterThanOrEqual(4);
        });
        
        it('should click to reveal gallery', function() {
            var gallery = element.all(by.css('.asset-thumb')).first();
            expect(gallery.isDisplayed()).toBe(true);
            gallery.click();
            expect(browser.getCurrentUrl()).toContain('https://www.forbes.com/media-manager/#/gallery/');
        });
    });    
});