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

describe('Gallery Carousal', function () {

	var beforeImage = "http://specials-images.forbesimg.com/imageserve/479783114/1200x0.jpg?fit=scale&background=000000";
	var afterImage = "http://specials-images.forbesimg.com/imageserve/480371870/1200x0.jpg?fit=scale&background=000000";

	it('Click should take user to next slide', function() {
		expect(activeImage.getAttribute('background-image: url')).toBe(beforeImage);
		next.click();
		expect(activeImage.getAttribute('background-image: url')).toBe(afterImage);
	});

	it('clicks should take user to the previous slide', function() {
		next.click();
		expect(activeImage.getAttribute('background-image: url')).toBe(afterImage );
		prev.click();
		expect(activeImage.getAttribute('background-image: url')).toBe(beforeImage);
	})

});

