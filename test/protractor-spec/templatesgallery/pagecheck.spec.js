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
    
    it('should have the correct slide progress numbers', function(){
        expect(element.all(by.className('image-number')).get(1).getText()).toEqual('2 of 11'); 
    });
    
    it('should have the title of the slide', function() {
        expect(element.all(by.className('image-title')).get(1).getText()).toEqual('1. Maria Sharapova'); 
    });
    
    it('should have the image caption', function() {
        expect(element.all(by.className('image-caption')).get(1).getText().length > 0); 
    });
    
});
