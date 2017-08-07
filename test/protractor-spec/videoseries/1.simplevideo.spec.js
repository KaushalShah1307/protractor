var SimpleVideo = require('./video.page.js'),
	simpleVideo = new SimpleVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

var sections = element.all(by.css('.slider-container.fs-content'));

describe('Simple Video Homepage:', function() {
    
    it('get the page', function() {
       simpleVideo.get(); 
    });
    
    it('should have the header', function() {
        expect(element(by.css('.header')).isDisplayed()).toBe(true); 
    });
    
    it('should have the footer', function() {
        expect(element(by.tagName('footer')).isDisplayed()).toBe(true); 
    });
    
    it('should have top video promo', function() {
        expect(sections.first().isDisplayed()).toBe(true); 
    });
    
    it('should have latest video section', function() {
        expect(sections.get(1).isDisplayed()).toBe(true); 
    });
    
    it('should have recommended video section', function() {
        expect(sections.get(2).isDisplayed()).toBe(true); 
    });
    
});

describe('Ads', function() {
    
    var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");
    
    if(isMobile===false) {
        it('should have top ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dtop'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=7175%2Ffdc.forbes%2Fvideo'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height'); 
        });
    } else if(isMobile === true) {
        it('should have mobile ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=7175%2Ffdcmobile%2Fvideo'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=300x50%7C320x50%7C1x1');
        });
        
        it('should have mobilerec ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobilerec'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=7175%2Ffdcmobile%2Fvideo'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=300x250%7C300x50%7C320x180%7C320x50%7C1x1');
        });
    }
    
});