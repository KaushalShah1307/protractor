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
    
    xdescribe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].BrandVoiceLive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdcmobile'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('pictures'); 
                expect(browser.executeScript('return window.dataLayer[0].author;')).toEqual('Kurt Badenhausen'); 
                expect(browser.executeScript('return window.dataLayer[0].blogType;')).toEqual('individual'); 
                expect(browser.executeScript('return window.dataLayer[0].brandVoice;')).toEqual('none'); 
                //expect(browser.executeScript('return window.dataLayer[0].categories;')).toEqual("[ 'Business', 'Lifestyle', 'Lists', 'Sports & Leisure', 'SportsMoney' ]"); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('business'); 
                expect(browser.executeScript('return window.dataLayer[0].contribActive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].contribType;')).toEqual('Forbes Staff'); 
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('//www.forbes.com/pictures/mli45fdllh/1-maria-sharapova/'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('forbeslife'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('blogAndSlideId/blog/slide/985-20884'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('2'); 
                expect(browser.executeScript('return window.dataLayer[0].pageTotal;')).toEqual('11'); 
                expect(browser.executeScript('return window.dataLayer[0].pageType;')).toEqual('slide'); 
                expect(browser.executeScript('return window.dataLayer[0].primaryChannel;')).toEqual('Business'); 
                expect(browser.executeScript('return window.dataLayer[0].primarySection;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].published;')).toEqual('2015-8-12'); 
                expect(browser.executeScript('return window.dataLayer[0].section;')).toEqual('kurtbadenhausenblog'); 
                expect(browser.executeScript('return window.dataLayer[0].site;')).toEqual('kurtbadenhausen'); 
                expect(browser.executeScript('return window.dataLayer[0].slot;')).toEqual('none'); 
            });
            
        });
        
        describe('Simple Reach:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Kurt Badenhausen'); 
                expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-08-12T14:00:00Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual("The World's Highest-Paid Female Athletes 2015 -Gallery"); 
                expect(browser.executeScript('return window.__reach_config.tags[0];')).toEqual('site::kurtbadenhausen'); 
                expect(browser.executeScript('return window.__reach_config.tags[1];')).toEqual('slot::'); 
                expect(browser.executeScript('return window.__reach_config.tags[2];')).toEqual('type::slide'); 
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

