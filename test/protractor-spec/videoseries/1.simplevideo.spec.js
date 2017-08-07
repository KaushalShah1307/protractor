var SimpleVideo = require('./video.page.js'),
	simpleVideo = new SimpleVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

var sections = element.all(by.css('.slider-container.fs-content'));

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
    });
    
});