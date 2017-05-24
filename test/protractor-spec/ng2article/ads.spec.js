describe('NG2 Article Ads:', function() {
   
    it('should have the medianet unit', function() {
        expect(element(by.id('_mN_dy_289199738')).isPresent()).toBe(true);      
    });
    
    it('should have the revcontent unit', function() {
        expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isPresent()).toBe(true); 
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.Object.keys(external_services.ad_slots).length')).toBeGreaterThanOrEqual(10); 
    });
    
    it('should have ntv-rail-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[0]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[1]')).not.toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[2]')).toBe(2); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[3]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-rail-1"])[4]')).toEqual('ntv-rail-1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('scp=pos%3Dntv-rail');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('sz=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["spon-logo"])[4]')).toEqual('spon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('scp=pos%3Dspon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('sz=120x40%7C300x170%7C300x100%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[4]')).toEqual('article-0-top');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].V')).toContain('scp=pos%3Dtop');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].V')).toContain('sz=728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have loge ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[4]')).toEqual('ad-rail-0-loge');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[6].V')).toContain('scp=pos%3Dloge');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[6].V')).toContain('sz=300x600%7C300x250%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[6].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have rec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[4]')).toEqual('ad-rail-0-rec');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[7].V')).toContain('scp=pos%3Drec');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[7].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[7].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have recx-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[4]')).toEqual('ad-rail-0-recx-1');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[8].V')).toContain('scp=pos%3Drecx%26recx%3D1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[8].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[8].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have recx-2 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[4]')).toEqual('ad-rail-0-recx-2');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-2"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[9].V')).toContain('scp=pos%3Drecx%26recx%3D2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[9].V')).toContain('sz=300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[9].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
    
    it('should have inread ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[4]')).toEqual('inread');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[0]')).not.toBeUndefined();
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["inread"])[1]')).not.toBeUndefined();
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('scp=pos%3Dinread');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('sz=1x1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
    });
 
});