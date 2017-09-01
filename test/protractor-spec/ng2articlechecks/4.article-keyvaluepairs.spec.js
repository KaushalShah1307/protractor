describe('Amazon slots:', function() {
        
    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?view=prod&amzn_debug_mode=1';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have amzn slots', function() {
        expect(browser.executeScript('return window.Object.values(window.fbsads._config.amazonSlots).length')).toBeGreaterThan(0);
    });
});     
    
describe('Brand=IBM, co=IBM & hashtag KV:', function() {
        
    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/robertszczerba/2017/05/31/from-aging-to-autism-ibm-is-eliminating-barriers-to-technology/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have brand=IBM as KV pair for ad calls', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('brand%3Dibm');
    });

    it('should have co=IBM as KV pair for ad calls', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('co%3Dibm');
    });

    it('should have hashtag as KV pair for ad calls', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).toContain('ht%3DChangeTheWorld');
    });
        
});