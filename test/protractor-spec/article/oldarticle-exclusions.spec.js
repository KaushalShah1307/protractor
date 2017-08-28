describe('Capital One Article:', function() {
        
   it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/capitalone/2017/08/07/a-conversation-on-ai-machine-learning/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
        
    it('should not have the medianet unit', function() {
        var mnetUnit = element(by.id('_mN_dy_547648363'));
        expect(browser.isElementPresent(mnetUnit)).toBe(false);     
    });

    it('should not have the revcontent unit', function() {
        var revContent = element.all(by.className('rc-w-42020 rc-p rc-p-pt')).first();
        expect(browser.isElementPresent(revContent)).toBe(false);
    });
});