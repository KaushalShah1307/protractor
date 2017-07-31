describe('Compose Draft:', function() {
   var saveButton = element(by.css('.fp-button.button-save'));
   var publishButton = element(by.css('.fp-button.button-publish'));
   var headline = element.all(by.css('.title.headline-input')).first();
   var articleBody = element(by.css('.ql-editor'));
   var desktopView = element(by.css('.icon.icon-desktop.desktop'));
   var mobileView = element(by.css('.icon.icon-mobile.mobile'));
    
   it('should click create button', function() {
       var compose = element(by.css('.button-new'));
       compose.click();
   });
    
   it('should have the correct url', function() {
       expect(browser.getCurrentUrl()).toContain('compose');
   });
    
   it('should have view toggle', function() {
       expect(desktopView.getAttribute('title')).toEqual('Preview Desktop Version');
       expect(mobileView.getAttribute('title')).toEqual('Preview Mobile Version');
   });
    
   it('should have headline area', function() {
       expect(headline.isDisplayed()).toBe(true);
       expect(headline.getAttribute('placeholder')).toEqual('Add your headline...');
   });
    
   it('should have body/content area', function() {
       expect(articleBody.isDisplayed()).toBe(true);
       expect(articleBody.getAttribute('data-placeholder')).toEqual('Tell your story...');
   });
    
   it('should add headline', function() {
       headline.sendKeys('Protractor added this!');   
   });
    
   it('should add body text', function() {
       articleBody.sendKeys('Protractor added this text.');   
   });
    
});