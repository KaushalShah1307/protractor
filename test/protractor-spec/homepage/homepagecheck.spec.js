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
    });
    
    it('should have social module', function() {
        expect(element(by.css('.csf-sharing-list.homepage-sharing')).isPresent()).toBe(true);
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