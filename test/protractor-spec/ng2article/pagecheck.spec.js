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
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["spon-logo"])[4]')).toEqual('spon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[0].V')).toContain('scp=pos%3Dspon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[0].V')).toContain('sz=120x40%7C300x170%7C300x100%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[0].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[4]')).toEqual('article-0-top');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[5].V')).toContain('scp=pos%3Dtop');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[5].V')).toContain('sz=728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[5].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have loge ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[4]')).toEqual('ad-rail-0-loge');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[6].V')).toContain('scp=pos%3Dloge');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[6].V')).toContain('sz=300x600%7C300x250%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[6].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have rec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[4]')).toEqual('ad-rail-0-rec');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[7].V')).toContain('scp=pos%3Drec');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[7].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[7].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have recx-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[4]')).toEqual('ad-rail-0-recx-1');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[8].V')).toContain('scp=pos%3Drecx%26recx%3D1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[8].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[8].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have recx-2 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[4]')).toEqual('ad-rail-0-recx-2');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[9].V')).toContain('scp=pos%3Drecx%26recx%3D2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[9].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[9].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have recx-3 ad', function() {
        //expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-3"])[4]')).toEqual('ad-rail-0-recx-3');
        //expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-3"])[2]')).toBeGreaterThanOrEqual(1);
        //expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-3"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[10].V')).toContain('scp=pos%3Drecx%26recx%3D3');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[10].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[10].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have inread ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[4]')).toEqual('inread');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[0]')).not.toBeUndefined();
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[1]')).not.toBeUndefined();
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[1].V')).toContain('scp=pos%3Dinread');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[1].V')).toContain('sz=1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().ga)[1].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });

    
});