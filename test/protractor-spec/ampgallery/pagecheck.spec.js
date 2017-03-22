var AMPGallery = require('./ampgallery.page.js');
    ampGallery = new AMPGallery();

beforeEach(function() {
   browser.ignoreSynchronization = true; 
});

describe('AMP Gallery', function() {
   
    it('should get the page', function() {
       ampGallery.get(); 
    });
    
});