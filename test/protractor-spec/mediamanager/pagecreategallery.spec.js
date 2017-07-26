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
        element.all(by.css('.button')).first().click(); 
    });
    
});

describe('Gallery Images:', function() {
   
    it('should open the gallery', function() {
        var url = 'https://www.forbes.com/media-manager/#/gallery/5977a214a7ea436467b59929/';
        browser.get(url);
        globals.pagesChecked.push(url);
    });
    
    it('should click on My Images', function() {
        element.all(by.css('.dam-links>ul>li')).get(1).click(); 
    });
    
    it('should have gallery minimized in the tray', function() {
        expect(element(by.css('.gallery-title.ng-scope')).getText()).toContain('This is the title of the gallery entered by Protractor'); 
    });
    
    it('should add image to the gallery', function() {
        element.all(by.css('.image-button.image-button-text.add-image-button.ng-scope')).first().click(); 
    });
    
    it('should click to open the gallery from the tray', function() {
        element(by.css('.gallery-title.ng-scope')).click(); 
    });
    
    it('should have slides in the gallery', function() {
        expect(element.all(by.repeater('image in imagesList')).count()).toBeGreaterThan(0); 
    });
    
});