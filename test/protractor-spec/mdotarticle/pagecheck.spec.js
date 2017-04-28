var MobileDotArticle = require('./mdotarticle.page.js'),
	mobileDotArticle = new MobileDotArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('Mobile Article (MDot):', function() {

	it('should get the page', function() {
		mobileDotArticle.get();
	});
    
    it('should have the forbes logo', function() {
        expect(element(by.className('inlineicon inlineicon-forbes-logo')).isPresent()).toBe(true); 
    });
    
    it('should have the stream name', function() {
        expect(element(by.className('stream__name')).getText()).toEqual('#Under30'); 
    });
    
    it('should have the article headline', function() {
        expect(element(by.className('cover__preview__title')).getText()).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected'); 
    });
    
    it('should have the author byline', function() {
        expect(element(by.className('cover__byline__contrib')).getText()).toEqual('Holly Warfield, Forbes Staff'); 
    });
    
    xit('should have the page views', function() {
        expect(element(by.className('cover__meta__page__views')).getText()).toEqual('sdafgsdfg');
        pending('still need to find an optimal solution to grab the pageviews');
    });
    
    it('should have the page views iconography', function() {
        expect(element(by.className('inlineicon inlineicon-preview-eye')).isPresent()).toBe(true);
    });
    
    it('should click and expand the cover card', function() {
        element(by.className('cover__footer-scrim')).click();
        browser.sleep(1000).then(function() {
            expect(element(by.className('footer__progress')).getText()).toEqual('1 of 15');
            expect(browser.getCurrentUrl()).toContain('?c=0');
        });
    });
    
    xit('should swipe to show next card', function() {
        var card = element(by.className('pan__container '));

        browser.actions()
          .mouseMove(card, {x: 100, y: 100})
          .mouseDown()
          .mouseMove({x: 0, y: -400})
          .perform();

        browser.sleep(500);

        browser.actions()
          .mouseUp()
          .perform(); 
    });
    
    globals.generalCheck();
    
});

describe('Tracking on Mobile Article (MDot):', function() {

    describe('Google Analytics:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.dataLayer[0].cd1_title;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
            expect(browser.executeScript('return window.dataLayer[0].cd2_author;')).toEqual('Holly Warfield');
            expect(browser.executeScript('return window.dataLayer[0].cd2_stream;')).toEqual('Under30');
            expect(browser.executeScript('return window.dataLayer[0].cd5_specialSlot;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd3_cardPosition;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].cd9_contribType;')).toEqual('Forbes Staff');
            expect(browser.executeScript('return window.dataLayer[0].cd11_blogType;')).toEqual('individual');
            expect(browser.executeScript('return window.dataLayer[0].cd15_DFPSite;')).toEqual('fdcmdot');
            expect(browser.executeScript('return window.dataLayer[0].cd16_DFPZone;')).toEqual('cover');
            expect(browser.executeScript('return window.dataLayer[0].cd19_categories;')).toEqual('Under 30');
            expect(browser.executeScript('return window.dataLayer[0].cd20_editSlot;')).toEqual('30-under-30-17');
            expect(browser.executeScript('return window.dataLayer[0].cd21_hashtags;')).toEqual('Under30');
            expect(browser.executeScript('return window.dataLayer[0].cd24_naturalID;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.dataLayer[0].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd59_primaryChannel;')).toEqual('Business');
            expect(browser.executeScript('return window.dataLayer[0].cd60_primarySection;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd71_cardType;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].event;')).toEqual('initialPageView');
            expect(browser.executeScript('return window.dataLayer[0].pageTitle;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Holly Warfield');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('Business');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-01-03T13:40:07.138Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m-dev.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/?s=Under30');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('000000000000000000000000');
            expect(browser.executeScript('return window.__reach_config.title;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
        }); 
    });
    
});
