describe('People Pages:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/northwesternmutual/people/brentschutte/';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have special slot', function() {
            expect(browser.executeScript('return window.external_services.specialSlot')).toEqual('nwmf'); 
        });
        
        it('should have BrandVoice Contrib styling', function() {
            var contribStyles = element(by.css('.advoice-atype'));
            expect(contribStyles.getText()).toEqual('Northwestern Mutual Contributor');
        });
        
        it('should have BrandVoice Author name', function() {
            var authorName = element.all(by.css('.ng-binding.ng-scope')).get(0);
            expect(authorName.getText()).toEqual('Brent Schutte, CFA');
        });
    });