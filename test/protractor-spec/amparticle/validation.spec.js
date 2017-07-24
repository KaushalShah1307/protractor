describe('AMP Article Validation:', function() {
   
    it('should load AMP Validator site', function() {
        var url = 'https://validator.ampproject.org/#url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Flewisdvorkin%2F2015%2F06%2F10%2Finside-forbes-the-unstoppable-force-that-will-change-the-news-industry-forever%2Famp%2F%23development%3D1';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should check for validation', function() {
        expect(element(by.css('.ampproject-result.style-scope.webui-statusbar')).getText()).not.toContain('FAIL');
    });
    
});