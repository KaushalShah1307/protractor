describe('Gallery:', function() {
   
    it('should get the page', function() {
        var url = 'https://www.forbes.com/media-manager/#/gallery/596a299931358e4463b7312a/';
        browser.get(url);
        globals.pagesChecked.push(url); 
    });
    
    it('should have gallery title', function() {
        var title = element(by.css('.gallery-title.ng-binding'));
        expect(title.getText()).toContain("Exclusive Look Inside Giorgio Armani's Pantelleria Island Villa");
    });
    
    it('should have image counter', function() {
        var imageCounter = element.all(by.tagName('small')).first();
        expect(imageCounter.getText()).toEqual("22 images");
    });
    
});