var Pulse = require('./pulse.page.js'),
	pulse = new Pulse();

describe('Pulse - KPMG:', function() {
    
	it('should get the page', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the header on the page', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the footer on the page', function() {
        expect(element(by.tagName('footer')).isPresent()).toBe(true); 
    });
    
    it('should have brandvoice blurb', function() {
        expect(element(by.css('.brand-voice-blurb')).isDisplayed()).toBe(true); 
    });

describe('Pulse - KPMG:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Pulse:', function() {
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
				expect(globals.getParam(trackingPixel.srcString, 'su')).toContain('http://www.forbes.com/kpmg/the-great-rewrite');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('Leadership');
				expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual('Leadership');
			});
		});
        
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
                var sites = ['fdcmobile', 'fdc.forbes'];
                expect(sites).toContain(dataLayer.DFPSite);
                expect(dataLayer.DFPZone).toEqual('csf');
				expect(dataLayer.channel).toEqual('Leadership');
                expect(dataLayer.section).toEqual('Leadership');
                expect(dataLayer.bvProgramType).toEqual('special_feature');
                expect(dataLayer.brandVoice).toEqual('kpmg');
                expect(dataLayer.pageType).toEqual('csf');
				expect(dataLayer.slot).toEqual('kpmgsf');
			});
		});
        
        describe('SimpleReach', function() {
            var reachpixel;
            
            beforeAll(function(done) {
                reachpixel = $('script#simplereach-script[src*="d8rk54i4mohrb.cloudfront.net"]');
                reachpixel.getAttribute('src').then(function(src) {
                    reachpixel.srcString = src;
                    done();
                });      
            });
            
            it('should load the SimpleReach script', function() {
                expect(reachpixel.length > 1);
            });
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2016-06-20T11:11:11.111Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('KPMGVoice: The Great Rewrite - Forbes');
                expect(browser.executeScript('return window.__reach_config.tags[0];')).toEqual('site::'); 
                expect(browser.executeScript('return window.__reach_config.tags[1];')).toEqual('slot::kpmgsf'); 
                expect(browser.executeScript('return window.__reach_config.tags[2];')).toEqual('type::special feature');
                expect(browser.executeScript('return window.__reach_config.channels[0];')).toEqual('Leadership');
            });
            
        });
        
        describe('Comscore', function() {
            var comscorepixel;
            
            beforeAll(function(done) {
                comscorepixel = $('script[src*="b.scorecardresearch.com/beacon.js"]');
                comscorepixel.getAttribute('src').then(function(src) {
                    comscorepixel.srcString = src;
                    done();
                });      
            });
            
            it('should load the ComScore script', function() {
                expect(comscorepixel.length > 1);
            });
        });        
        
	});        
});
   
describe('Chapters:', function() {
        
    it('should get chapter: Introduction', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/0';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).first().getText()).toEqual('INTRODUCING THE GREAT REWRITE'); 
    });
    
    it('should get chapter: Industrial Manufacturing', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/1';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(5).getText()).toEqual('INDUSTRIAL MANUFACTURING'); 
    });
    
    it('should get chapter: Energy', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/2';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(6).getText()).toEqual('ENERGY'); 
    });
    
    it('should get chapter: Security', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/3';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(7).getText()).toEqual('SECURITY'); 
    });
    
    it('should get chapter: Autonomous Vehicles', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/4';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(8).getText()).toEqual('AUTONOMOUS VEHICLES'); 
    });
    
    it('should get chapter: Financial Services', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/5';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(4).getText()).toEqual('FINANCIAL SERVICES'); 
    });
    
    it('should get chapter: Healthcare', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/6';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(3).getText()).toEqual('HEALTHCARE'); 
    });
    
    it('should get chapter: Technology', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/7';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(2).getText()).toEqual('TECHNOLOGY'); 
    });
    
    it('should get chapter: Government', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/8';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(1).getText()).toEqual('GOVERNMENT'); 
    });
    
    it('should get chapter: Retail', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/9';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(9).getText()).toEqual('RETAIL'); 
    });
    
    it('should get chapter: Media', function() {
        var url = 'https://www.forbes.com/kpmg/the-great-rewrite/#/10';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should have the intro promo', function() {
        expect(element.all(by.css('.ww-chapters__menu__item__header__nav__section.ng-binding')).get(10).getText()).toEqual('MEDIA'); 
    });

});
    
});