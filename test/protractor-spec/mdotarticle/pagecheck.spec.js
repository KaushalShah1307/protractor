var MobileDotArticle = require('./mdotarticle.page.js'),
	mobileDotArticle = new MobileDotArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

describe('Mobile Article - Card View (MDot):', function() {

	it('should get the page', function() {
		mobileDotArticle.get();
	});
    
    it('should have the forbes logo', function() {
        expect(element(by.className('inlineicon inlineicon-forbes-logo')).isPresent()).toBe(true); 
    });
    
    it('should have the article headline', function() {
        expect(element(by.className('cover__preview__title')).getText()).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected'); 
    });
    
    it('should have the author byline', function() {
        expect(element(by.className('cover__byline__contrib')).getText()).toEqual('Holly Warfield, Forbes Staff'); 
    });
    
    xit('should have the page views', function() {
        browser.sleep(2000);
        var pageViews = element(by.css('.cover__meta__page__views__count'));
        expect(pageViews.isPresent()).toBe(true);
        expect(pageViews.getText().toString().length()).toBeGreaterThanOrEqual(6); 
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
    
    it('should have the medianet card', function() {
        expect(browser.executeScript('return window.Object.values(window.Object.values(__INITIAL_STATE__.cards)[14])[0]')).toEqual('blogAndPostId/blog/post/4724-165-MEDIANETADCARD-14'); 
    });
    
    xit('should swipe to show next card', function() {
        var card = element.all(by.className('pan__card pan__center card card--image ')).get(1);

        browser.actions().mouseMove(card, {x: 0,y: -250}).perform(); 
        browser.sleep(10000);
    });
    
    globals.generalCheck();
    
});

describe('Tracking on Mobile Article - Cover Card (MDot):', function() {

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
            expect(browser.executeScript('return window.dataLayer[0].tags;')).toEqual('site::datadesign, slot::, type::article');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Holly Warfield');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-01-03T13:40:00.000Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/?s=Under30');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009');
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
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('blog');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/4724-165');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('https://m.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/');
				expect(globals.getParam(trackingPixel.srcString, 're')).toEqual('m.forbes.com');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('Forbes Staff');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/2479402');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('t');
			});
        });        
});

describe('Tracking on Mobile Article - First Card (MDot):', function() {

    describe('Google Analytics:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.dataLayer[11].cd1_title;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
            expect(browser.executeScript('return window.dataLayer[11].cd2_author;')).toEqual('Holly Warfield');
            expect(browser.executeScript('return window.dataLayer[11].cd2_stream;')).toEqual('Under30');
            expect(browser.executeScript('return window.dataLayer[11].cd5_specialSlot;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[11].cd3_cardPosition;')).toEqual('First Content');
            expect(browser.executeScript('return window.dataLayer[11].cd9_contribType;')).toEqual('Forbes Staff');
            expect(browser.executeScript('return window.dataLayer[11].cd11_blogType;')).toEqual('individual');
            expect(browser.executeScript('return window.dataLayer[11].cd12_brandVoice;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[11].cd13_pageType;')).toEqual('blog:standard');
            expect(browser.executeScript('return window.dataLayer[11].cd15_DFPSite;')).toEqual('fdcmdot');
            expect(browser.executeScript('return window.dataLayer[11].cd16_DFPZone;')).toEqual('art-short');
            expect(browser.executeScript('return window.dataLayer[11].cd19_categories;')).toEqual('Under 30');
            expect(browser.executeScript('return window.dataLayer[11].cd20_editSlot;')).toEqual('30-under-30-17');
            expect(browser.executeScript('return window.dataLayer[11].cd21_hashtags;')).toEqual('Under30');
            expect(browser.executeScript('return window.dataLayer[11].cd24_naturalID;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.dataLayer[11].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[11].cd59_primaryChannel;')).toEqual('Business');
            expect(browser.executeScript('return window.dataLayer[11].cd60_primarySection;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[11].cd69_forbesOnTrump;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[11].cd71_cardType;')).toEqual('First Content');
            expect(browser.executeScript('return window.dataLayer[11].event;')).toEqual('subsequentPageView');
            expect(browser.executeScript('return window.dataLayer[11].pageTitle;')).toEqual('A Day In The Life Of A FORBES Under 30: How Young Innovators Stay Balanced, Focused And Connected');
            expect(browser.executeScript('return window.dataLayer[11].cm3_coversViewed;')).toBe(0);
            expect(browser.executeScript('return window.dataLayer[11].cm4_cardsConsumed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[11].cm6_coversViewedTotal;')).toBe(0);
            expect(browser.executeScript('return window.dataLayer[11].tags;')).toEqual('site::datadesign, slot::, type::article');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Holly Warfield');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4724-165');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2017-01-03T13:40:00.000Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/?s=Under30');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009');
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
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('blog');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/4724-165');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('https://m.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/');
				expect(globals.getParam(trackingPixel.srcString, 're')).toEqual('m.forbes.com');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('Forbes Staff');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/2479402');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('t');
			});
        });        
});

describe('BrandVoice Mobile Article (MDot):', function() {
   
    it('should get the page', function() {
        var url = 'https://m.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/?s=trending&a=a';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the forbes logo', function() {
        expect(element(by.className('inlineicon inlineicon-forbes-logo')).isPresent()).toBe(true); 
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
    
    it('should have the page views', function() {
        var pageViews = element(by.css('.cover__meta__page__views__count'));
        expect(pageViews.isPresent()).toBe(true);
        expect(pageViews.getText()).toBeGreaterThan(0);  
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
        var disclaimer1 = 'Forbes allows marketers to connect directly with the Forbes audience by enabling them to create content – and participate in the conversation – on the Forbes digital publishing platform. Each is produced by the marketer. Learn more about , or contact us at brandvoice.com'
        var disclaimer2 = 'Opinions expressed by Forbes Contributors are their own.'
        expect(element(by.className('bv-explainer__modal')).getText()).toContain(disclaimer1);
        expect(element(by.className('bv-explainer__modal')).getText()).toContain(disclaimer2);
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
        expect(element.all(by.className('article-photo-credit')).first().getText()).toEqual('Protractor'); 
        expect(element.all(by.className('wp-caption-text')).first().getText()).toEqual('"Protractor" with Angular JS'); 
    });
    
    it('should scroll on the page', function() {
        browser.executeScript("return window.document.getElementsByClassName('card__text')[0].scrollTop=2000");
        browser.executeScript("return window.document.getElementsByClassName('card__text')[0].scrollTop=4133");
    });
    
    describe('Ads:', function() {
       
        it('should have the mobile ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dmobile');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C320x50%7C300x50%7C360x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('specialSlot%3Dqualityassuranceslot');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('channel%3D%26section%3D%26');
        });

        it('should have the mobilex-1 ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).not.toBeNull();
            //expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('scp=pos%3Dmobilex%26mobilex%3D1');
            //expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('sz=320x50%7C300x250%7C320x50%7C300x50%7C320x180%7C360x180%7C1x1&fluid=height');
            //expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            //expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('specialSlot%3Dqualityassuranceslot');
            //expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('channel%3D%26section%3D%26');
        });

        it('should have the mobilerec ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobilerec');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('strnativekey%3D13b84c32');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x250%7C360x180%7C320x50%7C300x50%7C320x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('specialSlot%3Dqualityassuranceslot');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('channel%3D%26section%3D%26');
        });

        it('should have the mob-stream ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('cp=pos%3Dmob-stream');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('sz=320x50%7C300x250%7C320x50%7C300x50%7C320x180%7C360x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('specialSlot%3Dqualityassuranceslot');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('channel%3D%26section%3D%26');
        });

    });
    
    globals.generalCheck();
    
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
            expect(browser.executeScript('return window.dataLayer[0].cd45_brandVoiceLive;')).toEqual('true');
            expect(browser.executeScript('return window.dataLayer[0].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd56_contribActive;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd59_primaryChannel;')).toEqual('Tech');
            expect(browser.executeScript('return window.dataLayer[0].cd60_primarySection;')).toEqual('The Tech Life');
            expect(browser.executeScript('return window.dataLayer[0].cd61_bvContentSource;')).toEqual('forbes');
            expect(browser.executeScript('return window.dataLayer[0].cd68_bvProgramType;')).toEqual('elite');
            expect(browser.executeScript('return window.dataLayer[0].cd69_forbesOnTrump;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd71_cardType;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].event;')).toEqual('initialPageView');
            expect(browser.executeScript('return window.dataLayer[0].pageTitle;')).toEqual('Testing Angular JS apps with Protractor');
            expect(browser.executeScript('return window.dataLayer[0].cm3_coversViewed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm4_cardsConsumed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm6_coversViewedTotal;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].tags;')).toEqual('brandvoice, site::qualityassurance, slot::qualityassuranceslot, type::article');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('qualityassuranceguest');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/4248-455');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('business');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2008-03-09T22:28:00.000Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/?a=a&s=trending');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009');
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
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('blog');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/4248-455');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('AdVoice');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('business');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/1965859');
				expect(globals.getParam(trackingPixel.srcString, 're')).toEqual('m.forbes.com');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('t');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('https://m.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/');
			});
        });
    
});

describe('Long-Scroll Mobile Article (MDot):', function() {
   
    it('should get the page', function() {
        var url = 'https://m.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/?s=trending&ss=thisisswimlane';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the forbes logo', function() {
        expect(element(by.className('inlineicon inlineicon-forbes-logo')).isPresent()).toBe(true); 
    });
    
    it('should have the article headline', function() {
        expect(element(by.className('cover__preview__title')).getText()).toEqual('Link: How To Predict Managerial Success: 4 Key Qualities To Consider - Victor Lipman'); 
    });
    
    it('should have the author byline', function() {
        expect(element(by.className('cover__byline__contrib')).getText()).toEqual('Kaushal Shah, Forbes Staff'); 
    });
    
    it('should have the page views', function() {
        browser.sleep(2000);
        var pageViews = element(by.css('.cover__meta__page__views__count'));
        expect(pageViews.isPresent()).toBe(true);
        expect(pageViews.getText()).toBeGreaterThan(0); 
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
    
    it('should have the sharing module', function() {
        var shareIcons = element(by.className('sharrow__button'));
        expect(shareIcons.isPresent()).toBe(true);
        shareIcons.click();
        expect(element(by.className('share__buttons')).isPresent()).toBe(true);
        shareIcons.click();
    });
    
    it('should have captions and credits for the images', function() {
        expect(element.all(by.className('article-photo-credit')).first().getText()).toEqual('Photo credit is mandatory'); 
        expect(element.all(by.className('wp-caption-text')).first().getText()).not.toBeNull();
        //expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.wp-caption-text')).getPropertyValue('max-height')")).toEqual('15px');
    });
    
    it('should have NTV ad styling', function() {
        var ntvAd = element(by.className('str-adv'));
        expect(ntvAd.getText().length > 0);
        var ntvAdStyling = element(by.css('.str-adv>span'));
        expect(ntvAdStyling.getCssValue('color')).toEqual('rgba(255, 0, 0, 1)');
    });
    
    it('should scroll on the page', function() {
        browser.executeScript("return window.document.getElementsByClassName('card__text')[0].scrollTop=15000");
    });
    
    xit('should have the next article module', function() {
        expect(element(by.className('up-next visible')).isDisplayed()).toBe(true);
        expect(element(by.className('image')).getAttribute('src').isPresent()).toBe(true);
        expect(element(by.className('headline')).isPresent()).toBe(true);
    });
    
    describe('should have ads:', function() {
       
        it('should have the NTV MDot ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dntv-mdot');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=2x3%7C1x1');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('strnativekey%3DpxJ5tFGEXnANFtbFTPgK82f7');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('swimlane%3Dthisisswimlane');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('channel%3D%26section%3D');
        });

        it('should have the mobilerec ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobilerec');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x250%7C360x180%7C320x50%7C300x50%7C320x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('swimlane%3Dthisisswimlane');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('channel%3D%26section%3D');
        });

        it('should have the mobile ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('scp=pos%3Dmobile');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('sz=320x50%7C320x50%7C300x50%7C360x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('swimlane%3Dthisisswimlane');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('channel%3D%26section%3D');
        });

        it('should have the mobilex-1 ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('scp=pos%3Dmobilex');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('mobilex%3D1');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('sz=320x50%7C300x250%7C320x50%7C300x50%7C320x180%7C360x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('swimlane%3Dthisisswimlane');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].getContentUrl()')).toContain('channel%3D%26section%3D');
        });

        it('should have the mob-stream ad', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('scp=pos%3Dmob-stream');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('sz=320x50%7C300x250%7C320x50%7C300x50%7C320x180%7C360x180%7C1x1&fluid=height');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fart-long');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('swimlane%3Dthisisswimlane');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('channel%3D%26section%3D');
        });

        it('should not have the revcontent unit', function() {
            var revcontentUnit = element(by.className('rc-wc rc-bp rc-uid-64417 rc-g-p '));
            expect(browser.isElementPresent(revcontentUnit)).toBe(false); 
        });

        it('should have the mnet unit', function() {
            expect(element(by.id('_mN_dy_465034825')).isPresent()).toBe(true); 
        });
        
    });
    
    xdescribe('should have Facebook Placement IDs for ads:', function() {
       
        it('should have it for mobile ad', function() {
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobile)[0]')).toEqual('489260474596970_656643941191955'); 
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobile)[1]')).toEqual('320x50'); 
        });
        
        it('should have it for mobileint ad', function() {
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobileint)[0]')).toEqual('489260474596970_656644734525209'); 
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobileint)[1]')).toEqual('300x250'); 
        });
        
        it('should have it for mobileint-cov ad', function() {
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots)[4].placement_id')).toEqual('489260474596970_656644897858526'); 
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots)[4].size')).toEqual('300x250'); 
        });
        
        it('should have it for mobilerec ad', function() {
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobilerec)[0]')).toEqual('489260474596970_656644617858554'); 
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobilerec)[1]')).toEqual('300x250'); 
        });
        
        it('should have it for mobilex ad', function() {
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobilex)[0]')).toEqual('489260474596970_656644411191908'); 
            expect(browser.executeScript('return window.Object.values(fbsads._config.fbSlots.mobilex)[1]')).toEqual('300x250'); 
        });
    });
    
    globals.generalCheck();
    
});

describe('Tracking on Long-Scroll Mobile Article (MDot):', function() {

    describe('Google Analytics:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.dataLayer[0].cd1_title;')).toEqual('Link: How To Predict Managerial Success: 4 Key Qualities To Consider - Victor Lipman');
            expect(browser.executeScript('return window.dataLayer[0].cd2_author;')).toEqual('Kaushal Shah');
            expect(browser.executeScript('return window.dataLayer[0].cd2_stream;')).toEqual('trending');
            expect(browser.executeScript('return window.dataLayer[0].cd5_specialSlot;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd3_cardPosition;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].cd5_coversConsumed;')).toEqual('1');
            expect(browser.executeScript('return window.dataLayer[0].cd9_contribType;')).toEqual('Forbes Staff');
            expect(browser.executeScript('return window.dataLayer[0].cd11_blogType;')).toEqual('group');
            expect(browser.executeScript('return window.dataLayer[0].cd12_brandVoice;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd13_pageType;')).toEqual('blogslide:standard');
            expect(browser.executeScript('return window.dataLayer[0].cd15_DFPSite;')).toEqual('fdcmdot');
            expect(browser.executeScript('return window.dataLayer[0].cd16_DFPZone;')).toEqual('cover');
            expect(browser.executeScript('return window.dataLayer[0].cd19_categories;')).toEqual('Business');
            expect(browser.executeScript('return window.dataLayer[0].cd20_editSlot;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd21_hashtags;')).toEqual('trending');
            expect(browser.executeScript('return window.dataLayer[0].cd24_naturalID;')).toEqual('blogAndPostId/blog/post/1553-1533');
            expect(browser.executeScript('return window.dataLayer[0].cd45_brandVoiceLive;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd47_hashtagsTrending;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd56_contribActive;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd59_primaryChannel;')).toEqual('Tech');
            expect(browser.executeScript('return window.dataLayer[0].cd60_primarySection;')).toEqual('Transformational Tech');
            expect(browser.executeScript('return window.dataLayer[0].cd61_bvContentSource;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd68_bvProgramType;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd69_forbesOnTrump;')).toEqual('false');
            expect(browser.executeScript('return window.dataLayer[0].cd70_contribDivision;')).toEqual('none');
            expect(browser.executeScript('return window.dataLayer[0].cd71_cardType;')).toEqual('Cover');
            expect(browser.executeScript('return window.dataLayer[0].event;')).toEqual('initialPageView');
            expect(browser.executeScript('return window.dataLayer[0].pageTitle;')).toEqual('Link: How To Predict Managerial Success: 4 Key Qualities To Consider - Victor Lipman');
            expect(browser.executeScript('return window.dataLayer[0].cm3_coversViewed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm4_cardsConsumed;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].cm6_coversViewedTotal;')).toBe(1);
            expect(browser.executeScript('return window.dataLayer[0].tags;')).toEqual('site::qa, slot::, type::article');
        });
    });
    
    describe('Simple Reach:', function() {
       
        it('should pass the right custom parameters', function() {
            expect(browser.executeScript('return window.__reach_config.authors[0];')).toEqual('Kaushal Shah');
            expect(browser.executeScript('return window.__reach_config.article_id;')).toEqual('blogAndPostId/blog/post/1553-1533');
            expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('technology');
            expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2013-03-07T01:03:00.000Z');
            expect(browser.executeScript('return window.__reach_config.page_url;')).toEqual('https://m.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/?s=trending&ss=thisisswimlane');
            expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009');
            expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Link: How To Predict Managerial Success: 4 Key Qualities To Consider - Victor Lipman');
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
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('blogslide');
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual('blogAndPostId/blog/post/1553-1533');
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual('Forbes Staff');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('technology');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('blogAuthorId/blog/author/958141');
				expect(globals.getParam(trackingPixel.srcString, 're')).toEqual('m.forbes.com');
				expect(globals.getParam(trackingPixel.srcString, 'mb')).toEqual('t');
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('https://m.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/');
			});
        });
    
});
