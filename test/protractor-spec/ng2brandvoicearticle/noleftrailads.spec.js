describe('NG2 Brandvoice Article Ads on Smaller Breakpoints:', function() {
   
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-spon-logo"])[4]')).toEqual('ad-rail-0-spon-logo');
    });
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[4]')).toEqual('article-0-top');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[3]')).toBeGreaterThanOrEqual(1);
    });
    
    it('should have loge ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[4]')).toEqual('ad-rail-0-loge');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[3]')).toBeGreaterThanOrEqual(1);
    });
    
    it('should have rec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[4]')).toEqual('ad-rail-0-rec');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[3]')).toBeGreaterThanOrEqual(1);
    });
    
    it('should have recx-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[4]')).toEqual('ad-rail-0-recx-1');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[3]')).toBeGreaterThanOrEqual(1);
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.Object.keys(external_services.ad_slots).length')).toBeGreaterThanOrEqual(4); 
    });
    
    it('should not have the medianet unit', function() {
        var mnetUnit = element(by.id('_mN_dy_289199738'));
        expect(browser.isElementPresent(mnetUnit)).toBe(false);     
    });
    
    it('should have the revcontent unit', function() {
        expect(element.all(by.className('rc-w-16285 rc-p rc-p-pt')).first().isDisplayed()).toBe(true); 
    });
 
});