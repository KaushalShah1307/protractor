var SimpleVideo = require('./video.page.js'),
	simpleVideo = new SimpleVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

var heroVideo = element(by.css('.fbs-slider.fbs-slider--hero.ratio16x9'));
var latestVideoSection = element.all(by.css('.fbs-slide__bg-image.grid__image.modal__trigger'));
var latestSeriesSection = element.all(by.css('.fbs-slide__bg-image.grid__image.fs-responsive-text.fs-text-m'));
var heroImage = element.all(by.css('.fbs-slide__bg-image.hero__image')).first();
var videoModal  = element(by.css('.modal__content>fbs-video'));
var modalClose  = element(by.css('#close'));
var recommendedVideos = element.all(by.css('.recommended__title>a'));
var moduleNames = element.all(by.css('.slider-container>h2'));

describe('Simple Video Homepage:', function() {
    
    it('get the page', function() {
        simpleVideo.get(); 
    });
    
    it('should have the header', function() {
        expect(element(by.css('.header')).isDisplayed()).toBe(true); 
    });
    
    it('should have the footer', function() {
        expect(element(by.tagName('footer')).isDisplayed()).toBe(true); 
    });
    
    it('should have top video promo', function() {
        expect(heroVideo.isDisplayed()).toBe(true);
    });
    
    it('should have latest video section', function() {
        expect(latestVideoSection.isPresent()).toBe(true);
        expect(latestVideoSection.count()).toBe(30);
    });
    
    it('should have latest series section', function() {
        expect(latestSeriesSection.isPresent()).toBe(true);
        expect(latestSeriesSection.count()).toBeGreaterThanOrEqual(3);
    });
    
    it('should click and open video modal', function() {
        heroImage.click();
        expect(videoModal.isDisplayed()).toBe(true);
        //modalClose.click();
    });
    
    globals.generalCheck();
    
});