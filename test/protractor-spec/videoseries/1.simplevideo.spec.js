var SimpleVideo = require('./video.page.js'),
	simpleVideo = new SimpleVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

var sections = element.all(by.css('.slider-container.fs-content'));
var heroImage = element.all(by.css('.fbs-slide__bg-image.hero__image')).first();
var videoModal  = element(by.css('.modal__body>fbs-video'));
var modalClose  = element(by.css('#close'));
var recommendedVideos = element.all(by.css('.recommended__title>a'));

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
        expect(sections.first().isDisplayed()).toBe(true);
    });
    
    it('should have latest video section', function() {
        expect(sections.get(1).isDisplayed()).toBe(true);
        expect(element(by.css('.fbs-slider.fbs-slider--multiple.fbs-slider--latest')).getAttribute('data-in-view')).toEqual('3');
        expect(element.all(by.css('.grid__index')).count()).toBeGreaterThanOrEqual(30);
    });
    
    it('should have recommended video section', function() {
        expect(sections.get(2).isDisplayed()).toBe(true);
        expect(element(by.css('.fbs-slider.fbs-slider--multiple.fbs-slider--recommended')).getAttribute('data-in-view')).toEqual('4');
        expect(recommendedVideos.count()).toBeGreaterThanOrEqual(4);
    });
    
    it('should click and open video modal', function() {
        heroImage.click();
        expect(videoModal.isDisplayed()).toBe(true);
        modalClose.click();
    });
    
});