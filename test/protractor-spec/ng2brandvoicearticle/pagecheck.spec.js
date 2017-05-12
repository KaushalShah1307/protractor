var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage();

describe('NG2 BrandVoice Article:', function() {

	it('should get the page', function() {
		articlePage.get();
	});
    
    it('should have the beta flag', function() {
        expect(element.all(by.className('beta fs-text-s')).isPresent()).toBe(true); 
    });
    
    it('should have the title of the article', function() {
        expect(element.all(by.className('fs-headline')).first().getText()).toEqual('Testing Angular JS apps with Protractor'); 
    });

    it('should have page views on the article', function(){
        expect(element.all(by.className('view-count')).first().getText()).toBeGreaterThanOrEqual('57'); 
    });
    
    it('should have the eye icon next to page views', function() {
        expect(element.all(by.css('.icon.icon-preview-eye')).first().isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the circ link', function() {
        expect(element(by.className('circ-link'))).toBeTruthy(); 
    });
    
    it('should have the body content', function() {
        expect(element(by.className('article-injected-body')).length > 0); 
    });
    
    it('should have the tweet quotes module', function() {
        expect(element(by.className('tweet_quote')).isPresent()).toBe(false); 
    });
    
    it('should have the BrandVoice logo', function() {
        expect(element(by.className('logo')).isPresent()).toBe(true); 
    });
        
    it('should have brandvoice styling', function() {
        expect(element.all(by.css('.brand')).first().getCssValue('color')).toEqual('rgba(196, 26, 35, 1)'); 
    });
    
    it('should have the BrandVoice blurb', function() {
        var bvBlurb = element(by.className('tag'));
        expect(bvBlurb.isPresent()).toBe(true);       
    });
    
    it('should have correct color for the brandvoice blurb', function() {
        expect(element.all(by.css('.what-is-this.fs-text-xxs.fs-text-link')).first().getCssValue('color')).toEqual('rgba(146, 10, 18, 1)');
    });
    
    it('should have the sharing module on top and bottom of the page', function() {
        expect(element.all(by.className('fs-text-m')).get(0).isPresent()).toBe(true); 
        expect(element.all(by.className('fs-text-m')).get(1).isPresent()).toBe(true); 
    });
    
    it('should have the contrib byline', function() {
        var contribByline = element(by.className('contrib-byline'));
        expect(contribByline.isPresent()).toBe(true);
        expect(contribByline.getText()).toEqual('Quality Assurance Voice');
    });
    
    it('should have the contrib tagline', function() {
        var contribTagline = element(by.className('contrib-tagline fs-text-xs fs-responsive-text'));
        expect(contribTagline.isPresent()).toBe(true);
        expect(contribTagline.getText()).toEqual('Quality Assurance - Forbes');
    });
    
    it('should have the full bio info', function() {
        var bio = element(by.className('full-bio fs-text-xs fs-responsive-text'));
        expect(bio.isPresent()).toBe(true);
        bio.click();
        var avatar = element(by.className('fs-author-image'));
        expect(avatar.getAttribute('src')).toEqual('https://blogs-images.forbes.com/assets/images/avatars/blog-4248_62_b08717085d3d02065c803f4c8d3ceb8d.jpg');
        expect(element(by.className('fs-text-m icon icon-facebook')).isPresent()).toBe(true);
        expect(element(by.className('fs-text-m icon icon-rss-feed')).isPresent()).toBe(true);
        //click on the recent stories to expand the view
        element(by.className('recent-post')).click();
        expect(element(by.className('fs-text-xs')).isPresent()).toBe(true);
        //close the author full bio module
        element(by.className('icon icon-chevron-down')).click();
    });
    
    it('should not have the dupe author byline', function() {
        // This is currently a bug in prod and should be fixed after fix has been released.
        expect(element(by.tagName('group-blog')).isPresent()).toBe(false); 
    });
    
    it('should have the photocredit and caption for the image', function() {
        // Check Photocredit and captions for the first image in the body
        expect(element.all(by.className('article-photo-credit')).get(0).getText()).toEqual('Protractor'); 
        expect(element.all(by.className('wp-caption-text')).get(0).getText()).toEqual('"Protractor" with Angular JS');
        
        // Check Photocredit and captions for the second image in the body
        expect(element.all(by.className('article-photo-credit')).get(1).getText()).toEqual('iStock'); 
        expect(element.all(by.className('wp-caption-text')).get(1).getText()).toEqual('This is the caption'); 
    });
    
    it('should have the comment bubble', function() {
        var commentBubble = element.all(by.className('fs-text-s fs-responsive-text')).get(1);
        expect(commentBubble.isPresent()).toBe(true);
    });
    
    it('should have print bar and reprints links', function() {
        expect(element.all(by.css('.article-footer>printbar')).all(by.css('.article-footer>printbar>ul>li')).count()).toBe(5); 
    });
    
    xit('should scroll to the next article', function() {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
        expect(browser.getCurrentUrl()).not.toEqual('https://www.forbes.com/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/');
        }); 
    });
    
	globals.generalCheck();
	//globals.checkAds(articlePage);
});

describe('NG2 BrandVoice Article Ads:', function() {
   
    it('should have the medianet unit', function() {
        expect(element(by.id('_mN_dy_289199738')).isPresent()).toBe(false);      
    });
    
    it('should have the revcontent unit', function() {
        expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isPresent()).toBe(true); 
    });
    
    it('should have all the ads', function() {
        expect(browser.executeScript('return window.Object.keys(external_services.ad_slots).length')).toBe(6); 
    });
    
});