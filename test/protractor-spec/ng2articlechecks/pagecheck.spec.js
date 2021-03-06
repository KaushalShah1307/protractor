var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage();

describe('NG2 Article Checks:', function() {
    
    describe('Article Badges:', function() {
    
        describe('Editors Pick:', function() {

            it('should get the page', function() {
                articlePage.get();
            });

            it('should have the editors pick badge', function() {
                var editorsPickBadge = element(by.css('.editors-pick'));
                expect(editorsPickBadge.isPresent()).toBe(true);
                expect(editorsPickBadge.getAttribute('href')).toEqual('https://www.forbes.com/editors-picks/');
            });
        });
        
        describe('Forbes on Trump:', function() {

            it('should have the Forbes on Trump badge', function() {
                var forbesOnTrump = element.all(by.css('.forbes-on-trump.fs-text-xxs')).get(1);
                expect(forbesOnTrump.isPresent()).toBe(true);
                expect(forbesOnTrump.getAttribute('href')).toEqual('https://www.forbes.com/forbes-on-trump/'); 
            });
        });
        
        describe('Forbes at 100:', function() {

            it('should have the Forbes at 100 badge', function() {
                var forbesAt100 = element.all(by.css('.forbes-100')).get(1);
                var forbesAt100Img = element.all(by.css('.forbes-100>img')).get(1);
                expect(forbesAt100.isPresent()).toBe(true);
                expect(forbesAt100Img.getAttribute('src')).toEqual('https://i.forbesimg.com/assets/img/forbes-at-100.svg'); 
            });
        });
        
        describe('Women at Forbes:', function() {
            
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/katepierce/2015/05/26/taylor-swift-beyonce-and-the-most-powerful-women-in-entertainment/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have the Women at Forbes badge', function() {
                var womenAtForbes = element.all(by.css('.women-at-forbes')).first();
                var womenAtForbesImg = element.all(by.css('.women-at-forbes>img')).first();
                expect(womenAtForbes.isPresent()).toBe(true);
                expect(womenAtForbes.getAttribute('href')).toEqual('https://www.forbes.com/women-at-forbes/'); 
                expect(womenAtForbesImg.getAttribute('src')).toEqual('https://i.forbesimg.com/special-report/2016/women-at-forbes/img/women-at-forbes_logo.svg');
                expect(element(by.css('.icon.icon-womenforbes-logo')).isPresent()).toBe(true);
            });
        });
        
        describe('Most Popular:', function() {
            
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/gordonkelly/2017/05/21/apple-leak-iphone-8-price-increase/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have the Most Popular badge', function() {
                var mostPopularBadge = element(by.css('.most-popular-icon.fs-author-badge'));
                var mostPopularBadgeIcon = element(by.css('.icon.icon-flame.fs-text-xs'));
                expect(mostPopularBadge.isPresent()).toBe(true);
                expect(mostPopularBadge.getAttribute('href')).toEqual('https://www.forbes.com/most-popular/');
                expect(mostPopularBadgeIcon.isPresent()).toBe(true);
            });
        });
    });
        
    describe('Article Pagination:', function() {
      
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/qa/2014/03/26/link-building-mobile-apps-with-angular-and-trigger-io/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        xit('should not have black border on hover state for continue button', function() {
            expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.next'), ':hover').getPropertyValue('border-color')")).toEqual('rgb(6, 158, 236)');
            expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.next'), ':hover').getPropertyValue('background')")).toEqual('rgb(6, 158, 236)');
        });
        
        it('should load the paginated page', function() {
            var nextPage = element.all(by.className('next')).first();
            nextPage.click();
            expect(browser.getCurrentUrl()).toContain('/2/');
        });
        
        it('should have the continued from indication', function() {
            expect(element(by.css('.fs-article>p')).isPresent()).toBe(true); 
        });
        
        describe('Paginated Page Tracking:', function() {
           
            xdescribe('Google Analytics', function() {
                var dataLayer;
                beforeAll(function() {
                    browser.executeScript(function() {
                        return dataLayer[18];
                    }).then(function(result) {
                        dataLayer = result;
                    });
                });

                it('should pass the right custom parameters', function() {
 /*                   expect(dataLayer.DFPSite).toEqual('fdc.forbes');
                    expect(dataLayer.DFPZone).toEqual('article-d-delta-u');
                    expect(dataLayer.author).toEqual('Lewis DVorkin');
                    expect(dataLayer.blogType).toEqual('individual');
                    expect(dataLayer.categories).toEqual('Business,Media & Entertainment,Tech,Social Media,Entrepreneurs,Management,Leadership');
                    expect(dataLayer.channel).toEqual('business');
                    expect(dataLayer.contribActive).toEqual('false');
                    expect(dataLayer.contribType).toEqual('Forbes Staff');
                    expect(dataLayer.edit).toEqual('none');
                    expect(dataLayer.forbesOnTrump).toEqual('false');
                    expect(dataLayer.leftRail).toEqual('true');
                    expect(dataLayer.naturalID).toEqual('blogAndPostId/blog/post/50-13891');
                    expect(dataLayer.section).toEqual('lewisdvorkinblog');
                    expect(dataLayer.hashtags).toEqual('none');
                    expect(dataLayer.slot).toEqual('none');
                    expect(dataLayer.site).toEqual('lewisdvorkin');
                    expect(dataLayer.primaryChannel).toEqual('Business');
                    expect(dataLayer.primarySection).toEqual('none');
                    expect(dataLayer.doNotPaginate).toEqual('donotpaginate'); */
                    expect(dataLayer.pageNumber).toEqual('2');
                    //expect(dataLayer.login).toEqual('false');	//re-enable this when the bug to add the param has been pushed out
                });
		      });
        
            describe('SimpleReach', function() {

                it('should pass the right custom parameters', function() {
                    expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Kaushal Shah'); 
                    expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('Technology'); 
                    expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2014-03-26T21:30:00.000Z'); 
                    expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                    expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(3); 
                    expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Link: Building mobile & apps with Angular & Trigger.IO'); 
                });

            });
            
         });
     });
    
    describe('Swimlane=NoStream-one/two Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?ss=nostream-one&view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have left rail stream', function() {
            var leftRailItems = $('.item.active');
            expect(leftRailItems.length > 1).toBe(false);
        });
        
        it('should have the sig file', function() {
            expect(element(by.tagName('sig-file')).isPresent()).toBe(true); 
        });
    
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
        
        it('should not have channel/section for ads', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).not.toContain('channel%3Dbusiness%252Ctech%252Centrepreneurs%252Cleadership'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).not.toContain('section%3Dbusiness%253Amedia%2526entertainment%252Ctech%253Asocialmedia%252Centrepreneurs%253Amanagement'); 
        });
    });  
    
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
    
    describe('Amazon slots:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=prod&amzn_debug_mode=1';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have amzn slots', function() {
            expect(browser.executeScript('return window.Object.values(window.fbsads.amazonBiddingService._config.amazonSlots).length')).toBeGreaterThan(0);
        });
    });     
    
    describe('Brand=IBM, co=IBM & hashtag KV:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/robertszczerba/2017/05/31/from-aging-to-autism-ibm-is-eliminating-barriers-to-technology/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have brand=IBM as KV pair for ad calls', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('brand%3Dibm');
        });
        
        it('should have co=IBM as KV pair for ad calls', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('co%3Dibm');
        });
        
        it('should have hashtag as KV pair for ad calls', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('ht%3DChangeTheWorld');
        });
        
    });      
    
    describe('Forbes Marketplace Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/forbesmarketplace/2017/05/18/forbes-nonprofit-council-members-are-expanding-globally-saving-lives-and-more/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have marketplace logo', function() {
            var logo = element(by.css('.marketplace-logo'));
            expect(logo.getText()).toEqual('Marketing,');
        });
        
        it('should have marketplace blurb', function() {
            var descretion = element.all(by.css('.tag>span')).get(0);
            var blurb = element.all(by.css('.tag>span')).get(1);
            expect(descretion.getText()).toEqual('detailed information on Forbes products.');
            expect(blurb.getText()).toEqual('What is This?');
        });
        
        it('should have contributor legal disclaimer', function() {
            var legalDisclaimer = element(by.css('.legal-disclaimer'));
            expect(legalDisclaimer.getText()).toEqual('Opinions expressed by Forbes Contributors are their own.');
        });
    });      
    
    describe('Template Type: noads:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/careers-at-forbes/2017/05/18/forbes-career-opportunity-junior-analyst-programmatic-optimization/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have templatetype: noads', function() {
            expect(browser.executeScript('return window.Object.values(window.dataLayer[0])[8]')).toEqual('blog:noads');
        });
        
        it('should not have ads', function() {
            expect(browser.executeScript('return window.Object.values(external_services.ad_slots).length')).toBe(3); 
        });
        
        it('should have templatetype=noads for all the ad calls', function() {
            var i;
            var j = browser.executeScript('return window.Object.values(googletag.pubads().getSlots()).length');
            for (i=0; i <= j; i++) {
                expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())['+i+'].getContentUrl()')).toContain('templatetype%3Dnoads');
            };
        });
    
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
    });       
    
    describe('Template Type: takeover:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/qa/2013/05/24/link-mozilla-developer-network-dom-developer-guide/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have templatetype: takeover', function() {
            expect(browser.executeScript('return window.Object.values(window.dataLayer[0])[8]')).toContain(':takeover');
        });
        
        it('should have ads', function() {
            expect(browser.executeScript('return window.Object.values(external_services.ad_slots).length')).toBe(5); 
        });
    
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
    });       
    
    describe('Emirates Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/emirates/2017/06/15/the-secrets-of-high-altitude-sleep/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
    });       
    
    describe('Capital One Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/capitalone/2017/08/07/a-conversation-on-ai-machine-learning/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
    });       
    
    describe('Source=bloomberg:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/?view=prod&source=bloomberg';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have bbgterm=true', function() {
            var i;
            var j = browser.executeScript('return window.Object.values(googletag.pubads().getSlots()).length');
            for (i=0; i <= j; i++) {
                expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())['+i+'].getContentUrl()')).toContain('bbgterm%3Dtrue');
            };     
        });
    });       
    
    describe('Magazine:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/lewisdvorkin/2017/06/07/inside-forbes-great-people-at-the-core-of-the-now-and-whats-next/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have magazine blurb', function() {
            var magazineBlurb = element(by.css('.magazine'));
            expect(browser.isElementPresent(magazineBlurb)).toBe(true);
            expect(magazineBlurb.getText()).toEqual('This story appears in the June 29, 2017 issue of Forbes. Subscribe');
        });
    });       
    
    describe('Embeds:', function() {
        
        describe('Instagram:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/natalierobehmed/2015/09/17/inside-the-earnings-of-taylor-swifts-girl-gang/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have instagram embeds', function() {
                for(var i=0; i<6; i++) {
                   var instaEmbeds = element(by.css("#instagram-embed-"+i+""));
                   expect(browser.isElementPresent(instaEmbeds)).toBe(true); 
                };
            });
        });
        
        describe('Twitter:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/jerrybarca/2016/11/09/belichick-letter-to-trump-about-friendship-not-politics/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have twitter embeds', function() {
                for(var i=0; i<1; i++) {
                   var twitterEmbeds = element(by.css("#twitter-widget-"+i+""));
                   expect(browser.isElementPresent(twitterEmbeds)).toBe(true); 
                };
            });
        });
        
        describe('Vimeo:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/brucekasanoff/2016/05/20/the-1-secret-to-career-success/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have vimeo embeds', function() {
                var vimeoEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>span>iframe"));
                expect(vimeoEmbeds.getAttribute('src')).toEqual('https://player.vimeo.com/video/167292188?title=0&byline=0&portrait=0');
                expect(browser.isElementPresent(vimeoEmbeds)).toBe(true);
            });
        });
        
        describe('Soundcloud:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/ianaltman/2016/04/28/3-proven-ways-to-ensure-success-at-your-next-business-conference/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have soundcloud embeds', function() {
                var soundcloudEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
                expect(soundcloudEmbeds.getAttribute('src')).toEqual('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/260750925&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false');
                expect(browser.isElementPresent(soundcloudEmbeds)).toBe(true);
            });
        });
        
        describe('Apester:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/emilyinverso/2016/10/10/quiz-who-said-what-in-last-nights-debate/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have apester embeds', function() {
                var apesterEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
                expect(apesterEmbeds.getAttribute('src')).toEqual('https://renderer.qmerce.com/interaction/57fb9063605e06ce177ff792');
                expect(browser.isElementPresent(apesterEmbeds)).toBe(true);
            });
        });
        
        describe('JS Maps:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/williamnoglows/2015/06/29/on-tour-with-katy-perry/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have JS maps embeds', function() {
                var maps = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
                expect(maps.getAttribute('src')).toEqual('https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/4d47f43d6126f1807149ed1c60334b50/on-tour-with-katy-perry/index.html');
                expect(browser.isElementPresent(maps)).toBe(true);
            });
        });
        
        describe('Scribd:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/matthewherper/2016/07/08/theranos-defiantly-says-holmes-will-remain-ceo-but-it-may-stop-all-lab-operations/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have scribd embeds', function() {
                var scribdEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
                expect(scribdEmbeds.getAttribute('src')).toEqual('https://www.scribd.com/embeds/317818941/content?start_page=1&view_mode=scroll&access_key=key-26Hzw5EOAg42Pz78N8JD&show_recommendations=true&show_upsell=true');
                expect(browser.isElementPresent(scribdEmbeds)).toBe(true);
            });
        });
        
        describe('Libsyn:', function() {
        
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/jacobmorgan/2016/06/27/marshall-goldsmith-on-how-to-drive-behavior-change/?view=prod';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have libsyn embeds', function() {
                var libsynEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
                expect(libsynEmbeds.getAttribute('src')).toEqual('https://html5-player.libsyn.com/embed/episode/id/4472425/height/300/width/640/theme/standard/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/direction/backward/no-cache/true/');
                expect(browser.isElementPresent(libsynEmbeds)).toBe(true);
            });
        });
    });

    //globals.generalCheck();
});