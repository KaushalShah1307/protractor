describe('Create Gallery:', function() {
   
    it('should click to create gallery', function() {
        element.all(by.css('.dam-links>ul>li>a')).get(0).click();
        browser.sleep(5000);
        expect(element(by.css('.modal-title')).getText()).toEqual('Create New Gallery');
    });
    
    it('should add a title', function() {
        var title = element(by.model('new_gallery.title'));
        title.click();
        title.sendKeys('This is the title of the gallery entered by Protractor');
    });
    
    it('should add keywords', function() {
        var tags = element(by.model('new_gallery.keywords'));
        tags.click();
        tags.sendKeys('Protractor Tags');
    });
    
    it('should submit to create the gallery', function() {
        element(by.css('.button')).click(); 
    });
    
});