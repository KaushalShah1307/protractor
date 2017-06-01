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
                var url = 'https://www.forbes.com/sites/katepierce/2015/05/26/taylor-swift-beyonce-and-the-most-powerful-women-in-entertainment/?view=beta-u';
                browser.get(url);
                globals.pagesChecked.push(url);
            });

            it('should have the Women at Forbes badge', function() {
                var womenAtForbes = element(by.css('.women-at-forbes'));
                var womenAtForbesImg = element(by.css('.women-at-forbes>img'));
                expect(womenAtForbes.isPresent()).toBe(true);
                expect(womenAtForbes.getAttribute('href')).toEqual('https://www.forbes.com/women-at-forbes/'); 
                expect(womenAtForbesImg.getAttribute('src')).toEqual('https://i.forbesimg.com/special-report/2016/women-at-forbes/img/women-at-forbes_logo.svg');
                expect(element(by.css('.icon.icon-womenforbes-logo')).isPresent()).toBe(true);
            });
        });
        
        describe('Most Popular:', function() {
            
            it('should get the page', function() {
                var url = 'https://www.forbes.com/sites/gordonkelly/2017/05/21/apple-leak-iphone-8-price-increase/?view=beta-u';
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
        
    xdescribe('Article Pagination:', function() {
      
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/qa/2014/03/26/link-building-mobile-apps-with-angular-and-trigger-io/?view=beta-u';
            browser.get(url);
            globals.pagesChecked.push(url);
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
                        return dataLayer[20];
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
                    expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Kaushal Shah'); 
                    expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('Technology'); 
                    expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2014-03-26T21:30:00.000Z'); 
                    expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('000000000000000000000000'); 
                    expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(3); 
                    expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Link: Building mobile & apps with Angular & Trigger.IO'); 
                    expect(browser.executeScript('return window.__reach_config.ref_url;')).toEqual('value should be passed here once issue has been fixed'); 
                    expect(browser.executeScript('return window.__reach_config.referrer;')).toEqual('value should be passed here once issue has been fixed'); 
                });

            });
            
         });
     });
    
    describe('Swimlane=NoStream-one/two Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?ss=nostream-one';
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
    });  
    
    describe('Left Rail Video Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/stevenbertoni/2017/05/23/former-apple-ceo-john-sculley-on-how-to-think-like-steve-jobs-and-market-like-pepsi/?view=beta-u';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have leftrail video on mute by default', function() {
            var leftRailVideo = element.all(by.css('.vjs-control-text')).get(3);
            expect(leftRailVideo.getText()).toEqual('Unmute');
        });
    });  
    
    describe('Video on Swimlane Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/jimmyrohampton/2017/05/26/is-brain-machine-interface-the-future-of-social-media/?view=beta-u&ss=nostream-one';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have the left rail video', function() {
            var leftRailVideo = element(by.css('#brightcove_perform_0_html5_api'));
            expect(browser.isElementPresent(leftRailVideo)).toBe(false);
        });
    });     
    
    describe('Brand=IBM & hashtag KV:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/patrickmoorhead/2017/05/25/ibms-new-powerai-features-again-demonstrates-enterprise-ai-leadership/?view=beta-u';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have brand=IBM as KV pair for ad calls', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('brand%3Dibm');
        });
        
        it('should have hashtag as KV pair for ad calls', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('ht%3DNewTech');
        });
    });      
    
    describe('Forbes Marketplace Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/forbesmarketplace/2017/05/18/forbes-nonprofit-council-members-are-expanding-globally-saving-lives-and-more/?view=beta-u';
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

    //globals.generalCheck();
});