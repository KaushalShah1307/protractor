describe('Compose Draft:', function() {
   var saveButton = element(by.css('.fp-button.button-save'));
   var publishButton = element(by.css('.fp-button.button-publish'));
   var headline = element.all(by.css('.title.headline-input')).first();
   var articleBody = element(by.css('.ql-editor'));
   var desktopView = element(by.css('.icon.icon-desktop.desktop'));
   var mobileView = element(by.css('.icon.icon-mobile.mobile'));
   var metaOpen = element(by.css('.button-meta'));
   var metaClose = element(by.css('.button-meta.show-close-button'))
   var nopublishFileds = element.all(by.css('.tray .no-publish'));
   var channelSection = element(by.css('.chansec'));
   var hashtags = element(by.css('.hashtags'));
   var excerpt = element(by.css('.excerpt'));
    
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
    
   it('should click to save the draft', function() {
       saveButton.click();
       expect(browser.getCurrentUrl()).toContain('compose?id=');
   });
    
   describe('Meta Box:', function() {
      
       it('should have meta properties', function() {
           browser.sleep(1000);
           metaOpen.click();
           browser.sleep(1000);
           expect(nopublishFileds.count()).toBe(3);
        });
    
       it('should select channel/section', function() {
           channelSection.click();
           browser.sleep(1000);
           var searchChannel = element(by.css('.search-box'));
           searchChannel.click();
           expect(element.all(by.css('.items>li')).count()).toBeGreaterThanOrEqual(221);
           searchChannel.sendKeys('Busine');
           element.all(by.css('.items>li')).first().click();
           var selctedChannels = element.all(by.css('.item'));
           browser.sleep(1000);
           //expect(selctedChannels.count()).toBe(1);
           channelSection.click();
        });
    
        it('should select hashtags', function() {
           hashtags.click();
           browser.sleep(1000);
           var searchHashtag = element(by.xpath('html/body/ng-component/div/app-meta-tray/div[2]/div/app-hashtags/div[3]/input'));
           searchHashtag.click();
           searchHashtag.sendKeys('KayMone');
           element.all(by.css('.items>li')).get(221).click();
        });
    
        it('should have excerpt', function() {
           excerpt.click();
           excerpt.sendKeys('This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.');
           var counter = element(by.css('.tray>div>app-excerpt>span'));
           expect(counter.getText()).toBe('-8');
           expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.tray>div>app-excerpt>span')).getPropertyValue('color')")).toEqual('rgb(240, 34, 46)');
           excerpt.clear().sendKeys('This is an excerpt entered using protractor.');
           var counter = element(by.css('.tray>div>app-excerpt>span'));
           expect(counter.getText()).toBe('256');
           expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.tray>div>app-excerpt>span')).getPropertyValue('color')")).toEqual('rgb(152, 223, 160)');
        });
       
        it('should close the meta box', function() {
           metaClose.click(); 
        });
       
   });
    
});