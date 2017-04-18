var Video = require('./video.page.js'),
	video  = new Video();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    // add the cookies here
});

describe('Video Home Page', function() {
    
	it('should get the page', function() {
		video.get();
	});
    
	it('should have the page header', function() {
		expect(element(by.tagName('header')).isPresent()).toBe(true);
	});
    
	it('should have the page footer', function() {
		expect(element(by.tagName('footer')).isPresent()).toBe(true);
	});
    
	it('should have the featured video', function() {
		expect(element(by.id('brightcove_perform_0_html5_api')).isPresent()).toBe(true);
	});
    
	it('should have the featured video title', function() {
		expect(element(by.className('video_title')).getText().length > 0);
	});
    
	it('should have the featured video dek', function() {
		expect(element(by.css('.video_info>p')).getText().length > 0);
	});
    
	it('should have the featured video date', function() {
		expect(element(by.className('date_views')).isPresent()).toBe(true);
	});
    
	it('should have the social sharing icons', function() {
		expect(element(by.className('article_actions inline_sharing clearfix')).isPresent()).toBe(true);
	});
    
	it('should have the recommended section', function() {
		expect(element(by.className('more_videos row flexslider-container')).isPresent()).toBe(true);
	});
    
	it('should have the featured section', function() {
		expect(element(by.className('clearfix rule row')).isPresent()).toBe(true);
	});
    
	it('should have the most-popular section', function() {
		expect(element(by.className('most_popular rule row load_more_container')).isPresent()).toBe(true);
	});
    
	it('should have the latest-video section', function() {
		expect(element(by.className('latest_video col-sm-8 stream row load_more_container')).isPresent()).toBe(true);
	});
    
	it('should have the video search section', function() {
		expect(element(by.className('search video_search_control clearfix')).isPresent()).toBe(true);
	});
    
	it('should have the featured-playlists section', function() {
		expect(element(by.className('featured_playlists rule')).isPresent()).toBe(true);
	});
    
});