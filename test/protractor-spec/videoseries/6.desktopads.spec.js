describe('Ads', function() {
    
    it('should have top ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('scp=pos%3Dtop'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('iu=%2F7175%2Ffdc.forbes%2Fseries'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('sz=320x50%7C728x90%7C970x250%7C970x90%7C970x66%7C640x360%7C1x1&fluid=height'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].getContentUrl()')).toContain('specialSlot%3Dcapone'); 
    });
    
    it('should have spon-logo ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('scp=pos%3Dspon-logo'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('iu=%2F7175%2Ffdc.forbes%2Fseries'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('320x50%7C120x40%7C300x170%7C300x100%7C1x1&fluid=height'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].getContentUrl()')).toContain('specialSlot%3Dcapone'); 
    });
    
    it('should have topx ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('scp=pos%3Dtopx%26topx%3D1'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('iu=%2F7175%2Ffdc.forbes%2Fseries'); 
        // per https://jira.forbes.com/browse/VIDEO-353 - AdOps requested to remove 640x360 ad size
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('sz=320x50%7C728x90%7C970x66%7C970x250%7C970x90%7C1x1&fluid=height'); 
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('specialSlot%3Dcapone'); 
    });
});