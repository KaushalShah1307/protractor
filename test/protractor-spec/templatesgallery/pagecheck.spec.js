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
        expect(browser.executeScript('return gpt_ad_slots.mobile.Z;')).toContain('scp=pos%3Dmobile'); 
    });
    
    describe('Tracking:', function() {
       
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
        expect(browser.executeScript('return gpt_ad_slots.mobile.Z;')).toContain('scp=pos%3Dmobile'); 
    });
    
    describe('Tracking:', function() {
       
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

