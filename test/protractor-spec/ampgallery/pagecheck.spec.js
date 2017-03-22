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
    
    it('should swipe thru the slides', function() {
       function swipe() {
           element(by.className('-amp-slides-container')).click(); 
           element(by.className('-amp-slides-container')).getLocation().then(function(data) {
                var startPoint = {
                x: data.x,
                y: data.y
                };
                var endPoint = {
                x: startPoint.x - 535,
                y: startPoint.y
                };
                browser.actions().dragAndDrop(startPoint, endPoint).perform();  
           }); 
        };
        swipe();
    });
    
});