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
		expect(element(by.id('footer_links')).isPresent()).toBe(true);
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
		expect(element(by.className('social')).isPresent()).toBe(true);
	});
    
	it('should have the recommended section', function() {
		expect(element(by.className('more_videos row flexslider-container')).isPresent()).toBe(true);
	});
    
	it('should have the featured section', function() {
		expect(element(by.className('featured rule row')).isPresent()).toBe(true);
	});
    
	it('should have the most-popular section', function() {
		expect(element(by.className('most_popular rule row load_more_container')).isPresent()).toBe(true);
	});
    
	it('should have the latest-video section', function() {
		expect(element(by.className('video_lower row')).isPresent()).toBe(true);
	});
    
	it('should have the video search section', function() {
		expect(element(by.className('search video_search_control clearfix')).isPresent()).toBe(true);
	});
    
	it('should have the featured-playlists section', function() {
		expect(element(by.className('featured_playlists')).isPresent()).toBe(true);
	});
    
	it('should have the most-read section', function() {
		expect(element(by.className('most_popular resp_hide')).isPresent()).toBe(true);
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
		expect(element(by.id('footer_links')).isPresent()).toBe(true);
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

describe('All Playlist Page:', function() {
   
    it('should get the page', function() {
        browser.get('/all-playlists/'); 
    });
    
    it('should have the playlists list', function() {
        expect(element(by.className('playlist_guide col-sm-12 row')).isDisplayed()).toBe(true); 
    });
    
	it('should have the latest-video section', function() {
		expect(element(by.className('latest_video col-sm-8 stream row load_more_container')).isPresent()).toBe(true);
	});
    
    it('should have 30 latest videos in the stream', function() {
        expect(element.all(by.css('.latest_video.col-sm-8.stream.row.load_more_container')).all(by.css('.latest_video.col-sm-8.stream.row.load_more_container>ul>li')).count()).toBe(30); 
    });
    
});

describe('Video Playlist Page:', function() {
   
    it('should get the page', function() {
        browser.get('/playlist/infinitivoice/'); 
    });
    
	it('should have the standalone video', function() {
		expect(element(by.id('brightcove_perform_0_html5_api')).isPresent()).toBe(true);
	});
    
	it('should have the video title', function() {
		expect(element.all(by.className('video_title')).first().getText().length > 0);
	});
    
    it('should have the BrandVoice prepend to the video title', function() {
        expect(element.all(by.className('advoice')).first().getText()).toEqual('InfinitiVoice'); 
    });
    
	it('should have the video dek', function() {
		expect(element(by.css('.video_info>p')).getText().length > 0);
	});
    
    it('should have the BrandVoice name and blurb', function() {
        var blurb = element.all(by.className('description')).first();
        var blurbDek = element.all(by.className('description_expanded')).first();
        expect(element.all(by.className('advoice')).first().isDisplayed()).toBe(true);
        expect(element.all(by.className('brandvoice')).first().getText()).toEqual('Infiniti');
        expect(element(by.className('advoice_desc')).isDisplayed()).toBe(true);
    });
    
});