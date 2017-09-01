/**
 * Created by kshah on 5/13/2016.
 */
var TemplatesGallery = require('./templatesgallery.page.js'),
	templatesGallery = new TemplatesGallery();

beforeEach(function(){
    browser.ignoreSynchronization = true; 
});

describe('Templates Gallery:', function() {

	it('should get the page', function() {
		templatesGallery.get();
	});
    
    it('should have the share icon', function() {
        expect(element(by.className('share-icon')).isPresent()).toBe(true); 
    });
    
    it('should have the correct slide progress numbers', function(){
        expect(element.all(by.className('image-number')).get(1).getText()).toEqual('2 of 11'); 
    });
    
    it('should have the title of the slide', function() {
        expect(element.all(by.className('image-title')).get(1).getText()).toEqual('1. Maria Sharapova'); 
    });
    
    it('should have the image caption', function() {
        expect(element.all(by.className('image-caption')).get(1).getText().length > 0); 
    });
    
    it('should have the mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x50%7C320x50&fluid=height'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fpictures'); 
    });
    
    describe('Tracking:', function() {
       
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Kurt Badenhausen'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
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
    
describe('Next Gallery Slide:', function() {

    it('should load the next slide', function() {
        browser.get('/pictures/mli45fdllh/2-serena-williams/'); 
    });
    
    it('should have the share icon', function() {
        expect(element(by.className('share-icon')).isPresent()).toBe(true); 
    });
    
    it('should have the correct slide progress numbers', function(){
        expect(element.all(by.className('image-number')).get(2).getText()).toEqual('3 of 11'); 
    });
    
    it('should have the title of the slide', function() {
        expect(element.all(by.className('image-title')).get(2).getText()).toEqual('2. Serena Williams'); 
    });
    
    it('should have the image credit', function() {
        expect(element.all(by.className('image-credit')).first().getText()).toEqual('2015 Getty Images'); 
    });
    
    it('should have the image caption', function() {
        expect(element.all(by.className('image-caption')).get(1).getText().length > 0); 
    });
    
    it('should have the mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x50%7C320x50&fluid=height'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fpictures'); 
    });
    
    describe('Tracking:', function() {
       
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
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('//www.forbes.com/pictures/mli45fdllh/2-serena-williams/'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('forbeslife'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('blogAndSlideId/blog/slide/985-20884'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('3'); 
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
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Kurt Badenhausen'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
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

