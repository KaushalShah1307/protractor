var isMobile = browser.executeScript("return window.matchMedia('only screen and (max-width: 760px)').matches");
var srcImage = element.all(by.css('.result>img'));

describe('Image Library:', function() {

    it('should toggle media options', function() {
        browser.sleep(2000);
        if (isMobile===false) {
           mediaToggle.click();
           expect(addMedia.isDisplayed()).toBe(true);
           expect(addVideo.isDisplayed()).toBe(true);
        } else if (isMobile===true) {
           expect(addMedia.isDisplayed()).toBe(false);
           expect(addVideo.isDisplayed()).toBe(false);
        };
    });

    it('should add image', function() {
        if (isMobile===false) {
           addMedia.click();
           expect(element(by.tagName('app-photo-manager')).isDisplayed()).toBe(true);
        } else if (isMobile===true) {
           expect(isMobile).toBe(true);
        };
    });

    it('should have image sources', function() {
        if (isMobile===false) {
           var sources = ['Getty', 'AP', 'Bloommberg', 'Shutterstock'];
           expect(sources).toContain(element.all(by.css('.hoverdiv.sources>ul>li')));
        } else if (isMobile===true) {
           expect(isMobile).toBe(true);
        };
    });

    it('should have search for an image', function() {
        if (isMobile===false) {
          searchInput.sendKeys('Lionel Messi\n');
          expect(srcImage.isDisplayed()).toBe(true);
        } else if (isMobile===true) {
           expect(isMobile).toBe(true);
        };
    });

});