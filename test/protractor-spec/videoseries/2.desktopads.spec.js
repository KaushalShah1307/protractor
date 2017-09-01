describe('Ads', function() {
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dtop'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdc.forbes%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C728x90%7C970x66%7C970x250%7C970x90%7C1x1&fluid=height'); 
    });
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dspon-logo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdc.forbes%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height'); 
    });
    
    it('should have video ad', function() {
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('pos%3Dvid-overlay%');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('sz=620x350');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('iu=/7175/fdc.forbes/video');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('specialSlot%3D');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('autoplay%3Dyes&');
        expect(browser.executeScript('return window.videojs.players["brightcove_perform_0"].ima3.adsRequest.adTagUrl')).toContain('vid%3D');
    });
    
});