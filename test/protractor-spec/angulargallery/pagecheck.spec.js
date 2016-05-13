/**
 * Created by kshah on 5/13/2016.
 */
var angularGalleryPage = require('./angulargallery.page.js'),
	galleryPage = new angularGalleryPage();
describe('Angular Gallery', function() {
	it('should get the page', function() {
		galleryPage.get();
	});

	globals.generalCheck();

	globals.checkAds(galleryPage.adsService);
});
