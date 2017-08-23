describe('Swimlane=NoStream-one/two Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/lewisdvorkin/2015/06/10/inside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever/?ss=nostream-one&view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should not have left rail stream', function() {
            var leftRailItems = $('.item.active');
            expect(leftRailItems.length > 1).toBe(false);
        });
        
        it('should have the sig file', function() {
            expect(element(by.tagName('sig-file')).isPresent()).toBe(true); 
        });
    
        it('should not have the medianet unit', function() {
            var mnetUnit = element(by.id('_mN_dy_289199738'));
            expect(browser.isElementPresent(mnetUnit)).toBe(false);     
        });

        it('should not have the revcontent unit', function() {
            var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
            expect(browser.isElementPresent(revContent)).toBe(false);
        });
        
        it('should not have channel/section for ads', function() {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).not.toContain('channel%3Dbusiness%252Ctech%252Centrepreneurs%252Cleadership'); 
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].getContentUrl()')).not.toContain('section%3Dbusiness%253Amedia%2526entertainment%252Ctech%253Asocialmedia%252Centrepreneurs%253Amanagement'); 
        });
    });