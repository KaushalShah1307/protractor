describe('Amazon ads:', function() {
       
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?amzn_debug_mode=1';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
    
        it('should click and expand the cover card', function() {
            element(by.className('cover__footer-scrim')).click();
            browser.sleep(1000).then(function() {
                expect(browser.getCurrentUrl()).toContain('?c=0');
            });
        });
        
        it('should have amazon ads', function() {
            browser.sleep(5000);
            expect(browser.executeScript('return window.Object.values(window.fbsads.amazonBiddingService._config.amazonSlots).length')).toBeGreaterThan(0);
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('amznsz%3D320x50');
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('amznbid');
        });
        
});

describe('MediaNet Header Bidding:', function() {
       
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?s=trending&?force_hbtest=1';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
    
        it('should click and expand the cover card', function() {
            element(by.className('cover__footer-scrim')).click();
            browser.sleep(1000).then(function() {
                expect(browser.getCurrentUrl()).toContain('?c=0');
            });
        });
        
        it('should have mnet KV on ads', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].getContentUrl()')).toContain('mnetPageID%3D0'); 
        });
        
});