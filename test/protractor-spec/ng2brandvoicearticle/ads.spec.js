describe('NG2 BrandVoice Article Ads:', function() {
   
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.Object.keys(external_services.ad_slots).length')).toBeGreaterThanOrEqual(4); 
    });
    
    it('should have loge ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[0]')).toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[1]')).toBeNull(); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[3]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-loge"])[4]')).toEqual('ad-rail-0-loge');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('scp=pos%3Dloge');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('sz=320x50%7C450x254%7C336x280%7C336x850%7C300x600%7C300x250%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('specialslot%3Dqualityassuranceslot');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].La.length')).toBe(7);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('bbgterm%3Dfalse');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('channel%3Dtech%26');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('section%3Dtech%253Athetechlife');
    });
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["spon-logo"])[4]')).toEqual('spon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('scp=pos%3Dspon-logo');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('sz=320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('specialslot%3Dqualityassuranceslot');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].La.length')).toBe(5);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('bbgterm%3Dfalse');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('channel%3Dtech%26');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('section%3Dtech%253Athetechlife');
    });
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[4]')).toEqual('article-0-top');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["article-0-top"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('scp=pos%3Dtop');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('sz=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].La.length')).toBe(7);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('bbgterm%3Dfalse');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('channel%3Dtech%26');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('section%3Dtech%253Athetechlife');
    });
    
    it('should have rec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[4]')).toEqual('ad-rail-0-rec');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-rec"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('scp=pos%3Drec');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('sz=320x50%7C300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].La.length')).toBe(7);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('bbgterm%3Dfalse');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('channel%3Dtech%26');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('section%3Dtech%253Athetechlife');
    });
    
    it('should have recx-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[4]')).toEqual('ad-rail-0-recx-1');
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[2]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ad-rail-0-recx-1"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('scp=pos%3Drecx%26recx%3D1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('sz=320x50%7C300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('iu=%2F7175%2Ffdc.forbes%2Farticle-d-delta-u');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].La.length')).toBe(7);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('bbgterm%3Dfalse');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('channel%3Dtech%26');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('section%3Dtech%253Athetechlife');
    });
    
    it('should have the medianet unit', function() {
        var mnetUnit = element(by.id('_mN_dy_289199738'));
        expect(browser.isElementPresent(mnetUnit)).toBe(false);     
    });
    
    it('should have the revcontent unit', function() {
        //expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isPresent()).toBe(true); 
        expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isDisplayed()).toBe(true); 
    });

    
});