var Video = require('./video.page.js'),
	video  = new Video();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    // add the cookies here
});

describe('Video Home Page:', function() {
    
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
    
    it('should have 100 recommended videos in the carousal', function() {
        expect(element.all(by.css('.slides.clearfix')).all(by.css('.slides.clearfix>li')).count()).toBe(100); 
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
    
    it('should have 29 latest videos in the stream', function() {
        expect(element.all(by.css('.latest_video.col-sm-8.stream.row.load_more_container')).all(by.css('.latest_video.col-sm-8.stream.row.load_more_container>ul>li')).count()).toBe(29); 
    });
    
	it('should have the video search section', function() {
		expect(element(by.className('search video_search_control clearfix')).isPresent()).toBe(true);
	});
    
	it('should have the featured-playlists section', function() {
		expect(element(by.className('featured_playlists rule')).isPresent()).toBe(true);
	});
        
	it('should click on the load-more button to expand the video drawer', function() {
        var loadMore = element.all(by.css('.load_more_label')).first();
		expect(loadMore.isPresent()).toBe(true);
        loadMore.click();
	});
    
});

describe('Individual Video Page:', function() {
    
    var individualVideo = '/video/5194688673001/';
    
    it('should get the page', function() {
        browser.get(individualVideo); 
    });
    
	it('should have the page header', function() {
		expect(element(by.tagName('header')).isPresent()).toBe(true);
	});
    
	it('should have the page footer', function() {
		expect(element(by.tagName('csf-footer')).isPresent()).toBe(true);
	});
    
	it('should have the standalone video', function() {
		expect(element(by.id('brightcove_perform_0_html5_api')).isPresent()).toBe(true);
	});
    
	it('should have the featured video title', function() {
		expect(element(by.className('video_title')).getText().length > 0);
	});
    
	it('should have the featured video dek', function() {
		expect(element(by.css('.video_info>p')).getText().length > 0);
	});
    
});

describe('Video Left Rail:', function() {
   
    it('should have the left rail', function() {
        expect(element(by.className('video-sidebar')).isDisplayed()).toBe(true); 
    });
    
    it('should match the video to the first left rail item', function() {
        var firstVideo = element.all(by.css('.related-video-title.exit_trigger_set.ga_tracked')).first();
        var videoTitle = element(by.className('video_title')).getText();
        expect(firstVideo.getText()).toEqual(videoTitle);
    });
    
});