describe('Compose Draft:', function() {
   var saveButton = element(by.css('.fp-button.button-save'));
   var publishButton = element(by.css('.fp-button.button-publish'));
   var headline = element.all(by.css('.title.headline-input')).first();    
    
   it('should click create button', function() {
       var compose = element(by.css('.button-new'));
       compose.click();
   });
    
   it('should have the correct url', function() {
       expect(browser.getCurrentUrl()).toContain('compose');
   });
    
   it('should have headline area', function() {
       expect(headline.isDisplayed()).toBe(true);
       expect(headline.getAttribute('placeholder')).toEqual('Add your headline...');
   });
   
});