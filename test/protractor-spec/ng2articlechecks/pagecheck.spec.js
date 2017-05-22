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
        
        describe('Women at Forbes:', function() {
            
            it('should get the page', function() {
                var url = '/sites/katepierce/2015/05/26/taylor-swift-beyonce-and-the-most-powerful-women-in-entertainment/?view=beta-u';
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
    });
        
    describe('Article Pagination:', function() {
      
        it('should get the page', function() {
            var url = '/sites/qa/2014/03/26/link-building-mobile-apps-with-angular-and-trigger-io/?view=beta-u';
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
        
        xdescribe('Paginated Page Tracking:', function() {
           
            describe('Google Analytics', function() {
                var dataLayer;
                beforeAll(function() {
                    browser.executeScript(function() {
                        return dataLayer[0];
                    }).then(function(result) {
                        dataLayer = result;
                    });
                });

                it('should pass the right custom parameters', function() {
                    expect(dataLayer.DFPSite).toEqual('fdc.forbes');
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
                    expect(dataLayer.doNotPaginate).toEqual('donotpaginate');	
                    //expect(dataLayer.login).toEqual('false');	//re-enable this when the bug to add the param has been pushed out
                });
		      });
        
            describe('SimpleReach', function() {

                it('should pass the right custom parameters', function() {
                    expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Lewis DVorkin'); 
                    expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business'); 
                    expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-06-10T14:00:00.000Z'); 
                    expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                    expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(13); 
                    expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
                });

            });
            
        });
    });   

    globals.generalCheck();
});