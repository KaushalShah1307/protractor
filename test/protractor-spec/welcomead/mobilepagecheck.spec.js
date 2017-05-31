/**
 * Created by kshah on 5/31/2016.
 */
var WelcomeAd = require('./welcomead.page.js'),
	welcomeAd = new WelcomeAd();

beforeEach(function(){
    browser.ignoreSynchronization = true; 
});

describe('Welcome Ad:', function() {

	it('should get the page', function() {
		welcomeAd.get();
	});
    
    it('should have the continue to site link', function() {
        expect(element(by.css('.continue-button')).isPresent()).toBe(true); 
    });
    
    it('should have the Forbes branding logo', function() {
        expect(element(by.css('.branding.icon.icon-forbes-logo')).isPresent()).toBe(true); 
    });
    
    it('should have the Quote of the Day title', function() {
        expect(element(by.css('.top')).getText()).toEqual('QUOTE OF'); 
        expect(element(by.css('.bottom')).getText()).toEqual('THE DAY'); 
    });
    
    it('should have the Quote', function() {
        expect(element(by.tagName('blockquote')).getText().length > 0); 
    });
    
    it('should have the Quote blockquote icon', function() {
        expect(element(by.css('.body-content>img')).getAttribute('src')).toEqual('https://specials-images.forbesimg.com/imageserve/57e197ac31358e16c589c0b5/40x0.png'); 
    });
    
    describe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdcmobile'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('welcome'); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('ads'); 
            });
            
        });
        
    });
    
 });

describe('Mobile Welcome Page Ads:', function() {
   
        it('should have all the ads', function() {
            expect(browser.executeScript('return window.Object.keys(googletag.pubads().getSlots()).length')).toBeGreaterThanOrEqual(2); 
        });

        it('should have temp ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('scp=pos%3Dtemp');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('sz=2x2%7C3x3%7C4x4%7C5x5');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('iu=%2F7175%2Ffdcmobile%2Fwelcome');
        });

        it('should have welcome ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('scp=pos%3Dwelcome');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('sz=1x1%7C300x250');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('iu=%2F7175%2Ffdcmobile%2Fwelcome');
        });
});

