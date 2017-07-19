describe('Gallery:', function() {
   
    it('should get the page', function() {
        var url = 'https://www.forbes.com/media-manager/#/gallery/596a299931358e4463b7312a/';
        browser.get(url);
        globals.pagesChecked.push(url); 
    });
    
});