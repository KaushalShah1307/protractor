var HomePage = require('./home.page.js'),
	homePage = new HomePage();

describe('Home Page Redesign:', function() {
	it('should get the page', function() {
		homePage.get();
	});
    
    it('should have the header links', function() {
        expect(element(by.className('header-links'))).toBeTruthy(); 
    });
    
    it('should have the location links', function() {
        expect(element(by.className('usa')).getText()).toContain('US');
        expect(element(by.className('asia')).getText()).toEqual('ASIA');
        expect(element(by.className('europe')).getText()).toEqual('EUROPE');
    });
    
    it('should have the footer', function() {
        expect(element(by.className('footer-center'))).toBeTruthy();
    })
    
 /*   it('should login', function() {
        element(by.css('.icon.icon-user')).click();
        element(by.css('.log-in.ajaxify.unireg_login.ng-scope')).click();
        element(by.css('#login_form_user_email')).sendKeys('testguy');
        element(by.css('#login_form_password')).sendKeys('Forbes123\n');
        
        var loginModal = element(by.className('modal-close'));
        expect(loginModal).toBeTruthy();
        loginModal.click();
        
        element(by.css('.user-thumbnail-image')).click();
        expect(element(by.css('.user-thumbnail-image'))).toBeTruthy();
    });
*/    
    it('should have social module', function() {
        element(by.css('.icon.icon-add-person.ng-scope')).click();
        expect(element(by.css('.csr-header-sharing.csf-sharing')).isDisplayed()).toBeTruthy();
    });
    
    it('should play the video', function() {
        var videoModule = element(by.id('row-6'));
        expect((videoModule).isDisplayed()).toBeTruthy();
        browser.executeScript("arguments[0].scrollIntoView();", videoModule.getWebElement());
        var player = element(by.css('.vjs-big-play-button'));
        player.click();
    });

//	globals.generalCheck();

	globals.checkAds(homePage.adsService);
});