describe('Desktop Ads:', function() {
     
    it('should load full page', function() {
        expect(browser.executeScript('return window.scrollTo(0,document.body.scrollHeight=4314)')).toBeNull();
        browser.manage().timeouts().pageLoadTimeout(30000);
    });
    
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["csr-header-leaderboard"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["csr-header-leaderboard"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('prev_scp=pos%3Dtop');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('prev_iu_szs=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].V')).toContain('iu_parts=7175%2Cfdc.forbes%2Chome');
    });
 
    
    it('should have ntv-home ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-home-1-0"])[2]')).toBe(3); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["ntv-home-1-0"])[3]')).toBe(2);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('prev_scp=pos%3Dntv-home');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('prev_iu_szs=320x50%7C2x3%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].V')).toContain('iu_parts=7175%2Cfdc.forbes%2Chome');
    });
 
    
    it('should have topx-1 ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-3-0"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-3-0"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('prev_scp=pos%3Dtopx');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('Main%26topx%3D1');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('prev_iu_szs=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].V')).toContain('iu_parts=7175%2Cfdc.forbes%2Chome');
    });
 
    
    it('should have rec ad', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["rec-5-1"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["rec-5-1"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].V')).toContain('prev_scp=pos%3Drec');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].V')).toContain('prev_iu_szs=320x50%7C300x250%7C336x280%7C300x600%7C336x850%7C450x254%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].V')).toContain('iu_parts=7175%2Cfdc.forbes%2Chome');
    });
 
    
    it('should have topx-2 ad', function() { 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-7-0"])[2]')).toBeGreaterThanOrEqual(1); 
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots["top-7-0"])[3]')).toBeGreaterThanOrEqual(1);
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].V')).toContain('prev_scp=pos%3Dtopx');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].V')).toContain('Main%26topx%3D2');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].V')).toContain('prev_iu_szs=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].V')).toContain('iu_parts=7175%2Cfdc.forbes%2Chome');
    });
 
});