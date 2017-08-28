describe('Ads', function() {
    
    it('should have mobile ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('scp=pos%3Dmobile'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fseries'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('sz=320x50%7C300x50%7C320x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('specialSlot%3Dcapone');
    });
        
    it('should have mobilerec ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dmobilerec'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fseries'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('sz=320x50%7C300x250%7C300x50%7C320x180%7C320x50%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('specialSlot%3Dcapone');
    });
        
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('&scp=pos%3Dspon-logo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdcmobile%2Fseries'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height');
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('specialSlot%3Dcapone');
    });
    
});