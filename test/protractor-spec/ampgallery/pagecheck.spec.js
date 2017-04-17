var AMPGallery = require('./ampgallery.page.js');
    ampGallery = new AMPGallery();

beforeEach(function() {
   browser.ignoreSynchronization = true; 
});

describe('AMP Gallery', function() {
   
    it('should get the page', function() {
       ampGallery.get(); 
    });
    
    it('should land on the first slide', function() {
       expect(element(by.className('numbers')).getText()).toEqual('1 of 11'); 
    });
    
    it('should have the gallery title and dek', function() {
       expect(element(by.className('title')).getText().length > 0);     
       expect(element(by.className('caption')).getText().length > 0);     
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.window.ampAdSlotIdCounter;')).toEqual(3);
    });
    
    it('should swipe thru the slides', function() {
        browser.actions().mouseMove({x: 20, y: 0}).mouseMove({x: 20, y: 500}).perform();
    });
    
});