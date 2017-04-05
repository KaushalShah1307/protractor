var AMPVideo = require('./ampvideo.page.js'),
	ampVideo  = new AMPVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('AMP Video Page', function() {
    
	it('should get the page', function() {
		ampVideo.get();
	});
    
    it('should have the forbes logo in the header', function() {
        expect(element(by.className('forbes-logo'))).toBeTruthy(); 
    });
    
    it('should have the video title', function() {
        expect(element(by.className('video_title')).getText()).toEqual('Stan Lee Introduces Augmented Reality For His Kids Universe'); 
    });
    
    it('should have the video dek', function() {
        expect(element(by.css('.article-body.inner-contain>p')).getText()).toEqual('Stan Lee is taking his Kids Universe into augmented reality.'); 
    });
    
    it('should have the recommended carousal', function() {
        expect(element(by.className('-amp-scrollable-carousel-container')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the footer', function() {
        expect(element(by.className('article-footer'))).toBeTruthy(); 
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.window.ampAdSlotIdCounter;')).toEqual(1);
    });
    
    it('should have the share icon in the header', function() {
        var shareIcon = element(by.className('share-icon'));
        var closeButton = element(by.css('.close-button-wrapper'));
        expect(shareIcon).toBeTruthy();
        shareIcon.click();
        expect(element(by.className('lightbox'))).toBeTruthy();
        //closeButton.click();
    });
    
//	globals.generalCheck();

//	globals.checkAds(ampArticle.adsService);
});