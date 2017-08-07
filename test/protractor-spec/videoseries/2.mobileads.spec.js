describe('Ads', function() {
    
    it('should have mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=7175%2Ffdcmobile%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C300x50%7C320x50%7C1x1&fluid=height');
    });
        
    it('should have mobilerec ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dmobilerec'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=7175%2Ffdcmobile%2Fvideo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C300x250%7C300x50%7C320x500%7C320x180%7C320x50%7C1x1&fluid=height');
    });
    
});
