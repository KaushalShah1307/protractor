describe('People Pages:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/northwesternmutual/people/brentschutte/';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have BrandVoice Contrib styling', function() {
            var contribStyles = element(by.css('.advoice-atype'));
            expect(contribStyles.getText()).toEqual('Northwestern Mutual Contributor');
        });
        
        it('should have BrandVoice Author name', function() {
            var authorName = element.all(by.css('.ng-binding.ng-scope')).get(0);
            expect(authorName.getText()).toEqual('Brent Schutte, CFA');
        });
    
        it('should have pageviews in the stream', function() {
            expect(element.all(by.className('article-views')).first().getText().length > 0); 
        }); 

        it('should have the most popular section', function() {
            expect(element(by.className('head-popular')).getText()).toEqual('MOST POPULAR'); 
        });

        it('should have the page views on the most popular cards', function() {
            expect(element.all(by.className('trending-reason')).first().getText().length > 0); 
        });

        it('should have the what-is-this blurb for Brandvoice', function() {
            var bvBlurb = element(by.className('what-is-this'));
            expect(bvBlurb).toBeTruthy();
            bvBlurb.click();
            expect(element(by.className('brandvoice-explained'))).toBeTruthy();
            element(by.className('close-button')).click();
        });
 });

describe('SimpleReach', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Brent Schutte, CFA'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('business'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2015-11-19T01:09:57.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Northwestern MutualVoice - We help you Live Life Differently.');
                expect(browser.executeScript('return window.__reach_config.tags[0];')).toEqual('brandvoice'); 
                expect(browser.executeScript('return window.__reach_config.tags[1];')).toEqual('site::northwesternmutual'); 
                expect(browser.executeScript('return window.__reach_config.tags[2];')).toEqual('slot::nwmf'); 
                expect(browser.executeScript('return window.__reach_config.tags[3];')).toEqual('type::author homepage'); 
                expect(browser.executeScript('return window.__reach_config.url;')).toEqual('https://www.forbes.com/sites/northwesternmutual/people/brentschutte/'); 
            });
            
});