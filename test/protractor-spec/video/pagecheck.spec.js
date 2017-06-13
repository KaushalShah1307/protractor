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
    
    it('should have 30 latest videos in the stream', function() {
        expect(element.all(by.css('.latest_video.col-sm-8.stream.row.load_more_container')).all(by.css('.latest_video.col-sm-8.stream.row.load_more_container>ul>li')).count()).toBe(30); 
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
    
    describe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].BrandVoiceLive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdc.forbes'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('video'); 
                expect(browser.executeScript('return window.dataLayer[0].blogType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].brandVoice;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].contribActive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].contribType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageTotal;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primaryChannel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primarySection;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].published;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].section;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].site;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].slot;')).toEqual('none'); 
            });
            
        });

        describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).not.toContain('#undefined');
				expect(globals.getParam(trackingPixel.srcString, 'au')).not.toBeNull();
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('f');
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('video');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toContain('video/brightcove/');
			});
		});
        
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
    
    describe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].BrandVoiceLive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdc.forbes'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('video'); 
                expect(browser.executeScript('return window.dataLayer[0].blogType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].brandVoice;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].contribActive;')).toEqual('true'); 
                expect(browser.executeScript('return window.dataLayer[0].contribType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('video/brightcove/5194688673001'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageTotal;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primaryChannel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primarySection;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].published;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].section;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].site;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].slot;')).toEqual('none'); 
            });
            
        });

        describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).not.toContain('#undefined');
				expect(globals.getParam(trackingPixel.srcString, 'au')).not.toBeNull();
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('f');
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('video');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('video/brightcove/5194688673001');
			});
		});
        
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
    
    describe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].BrandVoiceLive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdc.forbes'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('video'); 
                expect(browser.executeScript('return window.dataLayer[0].blogType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].brandVoice;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].contribActive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].contribType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageTotal;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primaryChannel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primarySection;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].published;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].section;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].site;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].slot;')).toEqual('none'); 
            });
            
        });

        describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).not.toContain('#undefined');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual('https://www.forbes.com/all-playlists/');
				expect(globals.getParam(trackingPixel.srcString, 'au')).not.toEqual('undefined');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('f');
			});
		});
        
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
        expect(element(by.className('advoice_desc initialized')).isDisplayed()).toBe(true);
        blurb.click();
        expect(blurbDek.isDisplayed()).toBe(true);
        blurb.click();
    });
    
    describe('Tracking:', function() {
       
        describe('Google Analytics:', function() {
           
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.dataLayer[0].BrandVoiceLive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPSite;')).toEqual('fdc.forbes'); 
                expect(browser.executeScript('return window.dataLayer[0].DFPZone;')).toEqual('video'); 
                expect(browser.executeScript('return window.dataLayer[0].blogType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].brandVoice;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].channel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].contribActive;')).toEqual('false'); 
                expect(browser.executeScript('return window.dataLayer[0].contribType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].customPage;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].edit;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].naturalID;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageNumber;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageTotal;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].pageType;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primaryChannel;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].primarySection;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].published;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].section;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].site;')).toEqual('none'); 
                expect(browser.executeScript('return window.dataLayer[0].slot;')).toEqual('none'); 
            });
            
        });

        describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).not.toContain('#undefined');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual('https://www.forbes.com/playlist/infinitivoice/');
				expect(globals.getParam(trackingPixel.srcString, 'au')).not.toEqual('undefined');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('f');
			});
		});
        
    });
    
});