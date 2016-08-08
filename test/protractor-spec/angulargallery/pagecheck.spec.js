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
//	var activeImage = element.by.css('background-image');

	it('Click should take user to next slide', function() {
		expect(beforeImage).toEqual(browser.current_page.page_data.slides[1]);
		element(by.css('.slick-next').click());
		expect(afterImage).toEqual(browser.current_page.page_data.slides[2]);
	});

	it('Click should take user to the previous slide', function() {
		expect(afterImage).toEqual(browser.current_page.page_data.slides[2]);
		element(by.css('.slick-prev').click());
		expect(beforeImage).toEqual(browser.current_page.page_data.slides[1]);
	})

});

describe('Parent article for the gallery', function(){

	it('should redirect to the article page', function(){
		element(by.id('gallery-link').click());
		browser.waitForAngular();
		expect(browser.driver.getCurrentUrl()).toEqual("http://www.forbes.com/sites/kurtbadenhausen/2015/08/12/the-worlds-highest-paid-female-athletes-2015/");
	});

});
