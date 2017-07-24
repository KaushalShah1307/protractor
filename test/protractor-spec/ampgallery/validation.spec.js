describe('AMP Gallery Validation:', function() {
   
    it('should load AMP Validator site', function() {
        var url = 'https://validator.ampproject.org/#url=https%3A%2F%2Fwww.forbes.com%2Fpictures%2Fmli45fdllh%2F1-maria-sharapova%2Famp%2F%23development%3D1';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should check for validation', function() {
        browser.sleep(5000);
        expect(element(by.css('.ampproject-result.style-scope.webui-statusbar')).getText()).not.toContain('FAIL');
    });
    
});