describe('Ads', function() {
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dtop'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=7175%2Ffdc.forbes%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height'); 
    });
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dlogo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=7175%2Ffdc.forbes%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height'); 
    });
    
});