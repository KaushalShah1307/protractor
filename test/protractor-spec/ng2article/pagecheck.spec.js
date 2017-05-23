var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage();

describe('NG2 Article:', function() {

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the beta flag', function() {
        expect(element.all(by.className('beta fs-text-s')).isPresent()).toBe(true); 
    });
    
    it('should have the title of the article', function() {
        expect(element.all(by.className('fs-headline')).first().getText()).toEqual('Inside Forbes: The Unstoppable Force That Will Change The News Industry Forever'); 
    });

    it('should have page views on the article', function(){
        expect(element.all(by.className('view-count')).first().getText()).toBeGreaterThanOrEqual('9,403'); 
    });
    
    it('should have the eye icon next to page views', function() {
        expect(element.all(by.css('.icon.icon-preview-eye')).first().isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the circ link', function() {
        expect(element(by.className('circ-link'))).toBeTruthy(); 
    });
    
    it('should have the body content', function() {
        expect(element(by.className('article-injected-body')).length > 0); 
    });
    
    it('should have the tweet quotes module', function() {
        expect(element(by.className('tweet_quote')).isPresent()).toBe(true); 
    });
    
    it('should have the Forbes Staff icon next to the author type', function() {
        expect(element(by.className('icon icon-staff-verified')).isPresent()).toBe(true); 
    });
    
	globals.generalCheck();
	//globals.checkAds(articlePage.adsService);
});

describe('NG2 Article Ads:', function() {
   
    it('should have the medianet unit', function() {
        expect(element(by.id('_mN_dy_289199738')).isPresent()).toBe(true);      
    });
    
    it('should have the revcontent unit', function() {
        expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isPresent()).toBe(true); 
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.Object.keys(external_services.ad_slots).length')).toBe(10); 
    });
    
    it('should have ntv-rail-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[0]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[1]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[2]')).toBe(2); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[3]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[4]')).toEqual('ntv-rail-1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[2].V')).toContain('scp=pos%3Dntv-rail');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[2].V')).toContain('sz=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[2].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have ntv-rail-2 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-5"])[0]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-5"])[1]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-5"])[2]')).toBe(2); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-5"])[3]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-5"])[4]')).toEqual('ntv-rail-5');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[3].V')).toContain('scp=pos%3Dntv-rail-2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[3].V')).toContain('sz=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[3].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have ntv-rail-3 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-8"])[0]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-8"])[1]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-8"])[2]')).toBe(2); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-8"])[3]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-8"])[4]')).toEqual('ntv-rail-8');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[4].V')).toContain('scp=pos%3Dntv-rail-2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[4].V')).toContain('sz=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[4].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
});