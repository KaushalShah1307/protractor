describe('Mobile Ads:', function() {
    
    it('should load full page', function() {
        expect(browser.executeScript('return window.scrollTo(0,document.body.scrollHeight=5315)')).toBeNull();
        browser.manage().timeouts().pageLoadTimeout(30000);
    });
    
    it('should have ntv-mobhome ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-home-1-0"])[2]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-home-1-0"])[3]')).toBe(2);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('prev_scp=pos%3Dntv-mobhome');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('prev_iu_szs=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
    
    it('should have mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["leaderboard"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["leaderboard"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('prev_scp=pos%3Dmobile');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('prev_iu_szs=320x50%7C300x50%7C320x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
    
    it('should have mobilerec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["rec-5-1"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["rec-5-1"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('prev_scp=pos%3Dmobilerec');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('prev_iu_szs=320x50%7C300x250%7C320x50%7C300x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
    
    it('should have mobilex-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-3-0"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-3-0"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('prev_scp=pos%3Dmobilex');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('Main%26mobilex%3D1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('prev_iu_szs=320x50%7C300x250%7C320x50%7C300x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
    
    it('should have mobilex-2 ad', function() { 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-7-0"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-7-0"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('prev_scp=pos%3Dmobilex');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('Main%26mobilex%3D2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('prev_iu_szs=320x50%7C300x250%7C320x50%7C300x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
    
    it('should have mobiletext ad', function() { 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["mobiletext-9-0"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["mobiletext-9-0"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].T')).toContain('prev_scp=pos%3Dmobiletext');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].T')).toContain('prev_iu_szs=320x50%7C300x250%7C336x280&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].T')).toContain('iu_parts=7175%2Cfdcmobile%2Chome');
    });
 
});