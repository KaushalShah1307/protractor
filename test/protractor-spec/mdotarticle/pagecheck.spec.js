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
    
    it('should have the sharing module', function() {
        var shareIcons = element(by.className('sharrow__button'));
        expect(shareIcons.isPresent()).toBe(true);
        shareIcons.click();
        expect(element(by.className('share__buttons')).isPresent()).toBe(true);
        shareIcons.click();
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
            expect(browser.executeScript('return window.dataLayer[0].cd12_brandVoice;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd13_pageType;')).toEqual('blog:standard');
            expect(browser.executeScript('return window.dataLayer[0].cd15_DFPSite;')).toEqual('fdcmdot');
            expect(browser.executeScript('return window.dataLayer[0].cd16_DFPZone;')).toEqual('cover');
            expect(browser.executeScript('return window.dataLayer[0].cd19_categories;')).toEqual('Under 30');
            expect(browser.executeScript('return window.dataLayer[0].cd20_editSlot;')).toEqual('30-under-30-17');
            expect(browser.executeScript('return window.dataLayer[0].cd21_hashtags;')).toEqual('Under30');
            expect(browser.executeScript('return window.dataLayer[0].cd24_naturalID;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.dataLayer[0].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd59_primaryChannel;')).toEqual('Business');
            expect(browser.executeScript('return window.dataLayer[0].cd60_primarySection;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd69_forbesOnTrump;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd71_cardType;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].event;')).toEqual('initialPageView');
            expect(browser.executeScript('return window.dataLayer[0].pageTitle;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
            expect(browser.executeScript('return window.dataLayer[0].cm3_coversViewed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm4_cardsConsumed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm6_coversViewedTotal;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].tags[0];')).toEqual('site::datadesign');
            expect(browser.executeScript('return window.dataLayer[0].tags[1];')).toEqual('slot::');
            expect(browser.executeScript('return window.dataLayer[0].tags[2];')).toEqual('type::blog');
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
    
	describe('Fast Pixel:', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('Cards');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/4724-165');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('Forbes Staff');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/2479402');
			});
        });    
    
});

describe('BrandVoice Mobile Article (MDot):', function() {
   
    it('should get the page', function() {
        browser.get('https://m-dev.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/?s=trending'); 
    });
    
    it('should have the forbes logo', function() {
        expect(element(by.className('inlineicon inlineicon-forbes-logo')).isPresent()).toBe(true); 
    });
    
    it('should have the stream name', function() {
        expect(element(by.className('stream__name')).getText()).toEqual('#Trending'); 
    });
    
    it('should have the BrandVoice flag', function() {
        expect(element(by.className('cover__bv-flag')).getText()).toEqual('Quality Assurance'); 
    });
    
    it('should have the article headline', function() {
        expect(element(by.className('cover__preview__title')).getText()).toEqual('Testing Angular JS apps with Protractor'); 
    });
    
    it('should have the author byline', function() {
        expect(element(by.className('cover__byline__contrib')).getText()).toEqual('qualityassuranceguest, Quality Assurance'); 
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
            expect(browser.getCurrentUrl()).toContain('?c=0');
        });
    });
    
    it('should have the BrandVoice branding in the header', function() {
        expect(element(by.className('bv-explainer__bar')).isPresent()).toBe(true); 
    });
    
    it('should click on the BrandVoice what-is-this link to expand the blurb', function() {
        element(by.className('bv-explainer__what')).click();
        expect(element(by.className('bv-explainer__modal')).isPresent()).toBe(true);
        var disclaimer = 'Forbes allows marketers to connect directly with the Forbes audience by enabling them to create content – and participate in the conversation – on the Forbes digital publishing platform. Each is produced by the marketer. More on here, or contact us at brandvoice.com.'
        expect(element(by.className('bv-explainer__modal')).getText()).toContain(disclaimer);
        element(by.className('modal__close')).click();
    });
    
    it('should have the sharing module', function() {
        var shareIcons = element(by.className('sharrow__button'));
        expect(shareIcons.isPresent()).toBe(true);
        shareIcons.click();
        expect(element(by.className('share__buttons')).isPresent()).toBe(true);
        shareIcons.click();
    });
    
    it('should have captions and credits for the images', function() {
        expect(element(by.className('article-photo-credit')).getText()).toEqual('Protractor'); 
        expect(element(by.className('wp-caption-text')).getText()).toEqual('"Protractor" with Angular JS'); 
    });
    
});

describe('Tracking on BrandVoice Mobile Article (MDot):', function() {

    describe('Google Analytics:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.dataLayer[0].cd1_title;')).toEqual('Testing Angular JS apps with Protractor');
            expect(browser.executeScript('return window.dataLayer[0].cd2_author;')).toEqual('qualityassuranceguest');
            expect(browser.executeScript('return window.dataLayer[0].cd2_stream;')).toEqual('trending');
            expect(browser.executeScript('return window.dataLayer[0].cd5_specialSlot;')).toEqual('qualityassuranceslot');
            expect(browser.executeScript('return window.dataLayer[0].cd3_cardPosition;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].cd5_coversConsumed;')).toEqual('1');
            expect(browser.executeScript('return window.dataLayer[0].cd9_contribType;')).toEqual('AdVoice');
            expect(browser.executeScript('return window.dataLayer[0].cd11_blogType;')).toEqual('ad');
            expect(browser.executeScript('return window.dataLayer[0].cd12_brandVoice;')).toEqual('qualityassurance');
            expect(browser.executeScript('return window.dataLayer[0].cd13_pageType;')).toEqual('blog:standard');
            expect(browser.executeScript('return window.dataLayer[0].cd15_DFPSite;')).toEqual('fdcmdot');
            expect(browser.executeScript('return window.dataLayer[0].cd16_DFPZone;')).toEqual('cover');
            expect(browser.executeScript('return window.dataLayer[0].cd19_categories;')).toEqual('Tech,The Tech Life');
            expect(browser.executeScript('return window.dataLayer[0].cd20_editSlot;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd21_hashtags;')).toEqual('trending');
            expect(browser.executeScript('return window.dataLayer[0].cd24_naturalID;')).toEqual('blogAndPostId/blog/post/4248-455');
            expect(browser.executeScript('return window.dataLayer[0].cd45_brandVoiceLive;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd56_contribActive;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd59_primaryChannel;')).toEqual('Tech');
            expect(browser.executeScript('return window.dataLayer[0].cd60_primarySection;')).toEqual('The Tech Life');
            expect(browser.executeScript('return window.dataLayer[0].cd61_bvContentSource;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd68_bvProgramType;')).toEqual('elite');
            expect(browser.executeScript('return window.dataLayer[0].cd69_forbesOnTrump;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd71_cardType;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].event;')).toEqual('initialPageView');
            expect(browser.executeScript('return window.dataLayer[0].pageTitle;')).toEqual('Testing Angular JS apps with Protractor');
            expect(browser.executeScript('return window.dataLayer[0].cm3_coversViewed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm4_cardsConsumed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm6_coversViewedTotal;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].tags[0];')).toEqual('brandvoice');
            expect(browser.executeScript('return window.dataLayer[0].tags[1];')).toEqual('site::qualityassurance');
            expect(browser.executeScript('return window.dataLayer[0].tags[2];')).toEqual('slot::qualityassuranceslot');
            expect(browser.executeScript('return window.dataLayer[0].tags[3];')).toEqual('type::blog');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('qualityassuranceguest');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4248-455');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('Tech');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-04-24T20:01:10.515Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m-dev.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/?s=trending');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('000000000000000000000000');
            expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Testing Angular JS apps with Protractor');
        }); 
    });
    
	describe('Fast Pixel:', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				//expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('Long Scroll');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/4248-455');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('AdVoice');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/1965859');
			});
        });    
    
});
