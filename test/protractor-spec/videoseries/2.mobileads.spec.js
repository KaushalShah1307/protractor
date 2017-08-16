describe('Ads', function() {
    
    var mnetUnit = element(by.id('_mN_dy_311139641'));
    
    it('should have mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C300x50%7C320x50%7C1x1&fluid=height');
    });
        
    it('should have mobilerec ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobilerec'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x250%7C300x50%7C320x180%7C320x50%7C1x1&fluid=height');
    });
        
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('scp=pos%3Dspon-logo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('sz=320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height');
    });
        
    it('should have mobiletext ad', function() {
        expect(browser.isElementPresent(mnetUnit)).toBe(true);
    });
    
    it('should have video ad', function() {
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('pos%3Doverlay');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('sz=620x350');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('iu=/7175/fdcmobile/video&');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('specialSlot%3Dkpmgsf');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('autoplay%3Dyes&');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('vid%3D5483625126001');
    });
    
});
