/**
 * Created by kshah on 5/13/2016.
 */
var angularGalleryPage = require('./angulargallery.page.js'),
	galleryPage = new angularGalleryPage();
describe('Angular Gallery', function() {

	it('should get the page', function() {
		galleryPage.get();
	});
    
/*    it('should have the title of the slide', function(){
        expect(element(by.className('title')).getText()).toEqual('1. Maria Sharapova'); 
    });
*/    
    it('should have the correct slide progress numbers', function(){
        expect(element(by.className('gallery-progress-numbers')).getText()).toEqual('2 of 11'); 
    });
    
    it('should click on the nav and load the next slide', function(){
        element(by.className('slick-next')).click();
        expect(element(by.className('gallery-progress-numbers')).getText()).toEqual('3 of 11');
    });

//	globals.generalCheck();

	globals.checkAds(galleryPage.adsService);
});
