var AMPGallery = require('./ampgallery.page.js');
    ampGallery = new AMPGallery();

beforeEach(function() {
   browser.ignoreSynchronization = true; 
});

describe('AMP Gallery:', function() {
   
    it('should get the page', function() {
       ampGallery.get(); 
    });
    
    it('should land on the first slide', function() {
       expect(element.all(by.className('numbers')).first().getText()).toEqual('1 of 11'); 
    });
    
    it('should have the gallery title and dek', function() {
       expect(element.all(by.className('title')).first().getText().length > 0);     
       expect(element.all(by.className('caption')).first().getText().length > 0);     
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.window.ampAdSlotIdCounter;')).toEqual(13);
    });
    
    it('should swipe thru the slides', function() {
        browser.actions().mouseMove({x: 20, y: 0}).mouseMove({x: 20, y: 500}).perform();
    });
    
});