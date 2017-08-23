describe('Left Rail Video Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/stevenbertoni/2017/05/23/former-apple-ceo-john-sculley-on-how-to-think-like-steve-jobs-and-market-like-pepsi/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have leftrail video on mute by default', function() {
            var leftRailVideo = element.all(by.css('.vjs-control-text')).get(3);
            expect(leftRailVideo.getText()).toEqual('Unmute');
        });
        
        it('should have video ad with pos=vid-lr', function() {
            var leftRailVideo = element(by.css('.video-placeholder>fbs-video'));
            expect(leftRailVideo.getAttribute('key-value-string')).toContain('pos=vid-lr');
            expect(leftRailVideo.getAttribute('key-value-string')).toContain('vw=400plus');
            expect(leftRailVideo.getAttribute('key-value-string')).toContain('hashtag=LikeABoss');
        });
        
        it('should have correct video ID', function() {
            var leftRailVideo = element(by.css('.video-placeholder>fbs-video'));
            expect(leftRailVideo.getAttribute('player-id')).toEqual('S1EBSbDn');
        });
        
        it('should autoplay video', function() {
            var leftRailVideo = element(by.css('.video-placeholder>fbs-video'));
            expect(leftRailVideo.getAttribute('autoplay')).toEqual('true');
        });
        
        xdescribe('Video Fast Pixel Tracking:', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com/fps/cookie_backup.php?n=video"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('https://www.forbes.com/video/5420940992001/');
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('video');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('video/brightcove/5420940992001');
				expect(globals.getParam(trackingPixel.srcString, 'n')).toEqual('video');
			});
		});
    });  
    
    describe('Top autoplay video Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/zackomalleygreenburg/2015/02/05/red-baraat-live-from-the-forbes-newsroom/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have video ad with pos=vid-iab', function() {
            var topVideo = element(by.css('.video-container.sidebar-autoplay-video.ratio16x9'));
            expect(topVideo.getAttribute('key-value-string')).toContain('pos=vid-iab');
        });
        
        it('should have correct video ID', function() {
            var topVideo = element(by.css('.video-container.sidebar-autoplay-video.ratio16x9'));
            expect(topVideo.getAttribute('player-id')).toEqual('4kXWOFbfYx');
        });
    });  
    
    describe('Video on Swimlane Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/jimmyrohampton/2017/05/26/is-brain-machine-interface-the-future-of-social-media/?view=prod&ss=nostream-one';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have the left rail video', function() {
            var leftRailVideo = element(by.css('#brightcove_perform_0_html5_api'));
            expect(browser.isElementPresent(leftRailVideo)).toBe(false);
        });
    });