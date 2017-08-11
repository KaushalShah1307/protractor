var SimpleSeries = require('./series.page.js'),
	simpleSeries = new SimpleSeries();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

var heroVideo = element(by.css('#brightcove_perform_0_html5_api'));
var fbsVideoGrid = element.all(by.css('.grid__image')).first();
var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");

describe('Simple Series Playlist:', function() {
    
    it('get the page', function() {
       simpleSeries.get(); 
    });
    
    it('should have the header', function() {
        expect(element(by.css('.header')).isDisplayed()).toBe(true); 
    });
    
    it('should have the footer', function() {
        expect(element(by.tagName('footer')).isDisplayed()).toBe(true); 
    });
    
    it('should have hero video', function() {
        if(isMobile===false) {
            expect(browser.isElementPresent(heroVideo)).toBe(true); 
        } else if(isMobile===true) {
            expect(browser.isElementPresent(heroVideo)).toBe(false);  
        };
    });
    
    it('should autoplay hero video', function() {
        if(isMobile===false) {
            expect(fbsVideoGrid.getAttribute('autoplay')).toEqual('true');
        } else if(isMobile===true) {
            expect(fbsVideoGrid.getAttribute('style')).not.toBeNull(true);
        }
    });
    
    
    //globals.generalCheck();
    
});