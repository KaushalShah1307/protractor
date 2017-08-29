describe('Compose Draft:', function() {
   var saveButton = element(by.css('.fp-button.button-save'));
   var publishButton = element.all(by.css('.fp-button.button-publish'));
   var headline = element.all(by.css('.title.headline-input')).first();
   var articleBody = element(by.css('.ql-editor'));
   var desktopView = element(by.css('.icon.icon-desktop.desktop'));
   var mobileView = element(by.css('.icon.icon-mobile.mobile'));
   var nopublishFileds = element.all(by.css('.tray .no-publish'));
   var channelSection = element(by.css('.chansec'));
   var hashtags = element(by.css('.hashtags'));
   var excerpt = element(by.css('.excerpt'));
   var mediaToggle = element(by.css('.toggle'));
   var addMedia = element(by.css('.add-image.toggleable'));
   var addVideo = element(by.css('.add-video.toggleable'));
   var searchInput = element(by.tagName('input'));
   var paragraphs = element.all(by.css('.ql-editor>p'));
   var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");
    
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
       headline.sendKeys('Protractor added this! and this is the headline for the draft post.');   
   });
    
   it('should add body text', function() {
       articleBody.sendKeys('https://www.youtube.com/watch?v=mI2dDwWaNUY \nProtractor added this text and it should serve as article body.\nProtractor added this text and it should serve as article body.\nProtractor added this text and it should serve as article body.\n');
   });
    
   it('should click to save the draft', function() {
       saveButton.click();
       expect(browser.getCurrentUrl()).toContain('compose?id=');
   });
    
   describe('Meta Box:', function() {
      
       it('should have meta properties', function() {
           browser.sleep(1000);
           publishButton.first().click();
           browser.sleep(1000);
           expect(nopublishFileds.count()).toBe(4);
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
           var searchHashtag = element(by.xpath('html/body/app-compose-container/app-compose/app-meta-tray/div[2]/app-hashtags/div[3]/input'));
           searchHashtag.click();
           searchHashtag.sendKeys('KayMone');
           element.all(by.css('.items>li')).get(221).click();
        });
    
        it('should have excerpt', function() {
           excerpt.click();
           excerpt.sendKeys('This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor.This is an excerpt entered using protractor. \n');
           var counter = element(by.css('.tray>app-excerpt>span'));
           expect(counter.getText()).toBe('-8');
           expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.tray>app-excerpt>span')).getPropertyValue('color')")).toEqual('rgb(240, 34, 46)');
           excerpt.clear().sendKeys('This is an excerpt entered using protractor.');
           var counter = element(by.css('.tray>app-excerpt>span'));
           expect(counter.getText()).toBe('256');
           expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.tray>app-excerpt>span')).getPropertyValue('color')")).toEqual('rgb(152, 223, 160)');
        });
       
        it('should close the meta box', function() {
           publishButton.first().click(); 
        });
       
   });
    
});