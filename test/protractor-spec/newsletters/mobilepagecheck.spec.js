var Newsletters = require('./newsletters.page.js'),
	newsletters  = new Newsletters();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    // add the cookies here
});

describe('Newsletters Home Page', function() {
    
	it('should get the page', function() {
		newsletters.get();
	});
    
    it('should have locks in front of articles', function() {
        expect(element(by.className('lock')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have special report module', function() {
        expect(element(by.className('special-reports')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the guru section', function() {
        expect(element(by.className('gurus')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should click on an article from the ALL Newsletters tab', function() {
        browser.get('/newsletters/all/');
        element(by.className('title-dek')).click();
        expect(browser.getCurrentUrl()).toContain('all-star-investor');
    });
    
    it('should have the Subscribe button', function() {
        expect(element(by.className('subscribe')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the paywall for unscubscribed articles', function() {
        element(by.css('.edittools-contentitem>h3>a')).click();
        expect(element(by.className('report')).getText()).toEqual('Read the Full Report');
    });
    
});

describe('Newsletters Blog', function() {
   
    it('should get the page', function() {
        browser.get('/newsletters/forbes-investor-edge/'); 
    });
    
    it('should have the blog logo', function() {
        expect(element(by.className('image-name')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the title', function() {
        expect(element(by.css('.author-header>h1')).getText()).toEqual('Forbes Investor Edge'); 
    });
    
    it('should have the slug', function() {
        element(by.className('bio-link')).click();
        expect(element(by.className('slug')).getText()).toEqual('Investment ideas you can profit from'); 
    });
    
    it('should have the month in the stream', function() {
        expect(element(by.className('month')).getText().length > 0); 
    });
    
    it('should have the footer', function() {
        expect(element(by.className('footer-mobile')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should click on the first newsletter', function() {
        element(by.css('.edittools-contentitem>h3>a')).click();
        expect(browser.getCurrentUrl()).toContain('forbes-investor-edge');
    });
    
});

describe('Newsletters Article', function() {
   
    it('should get the FREE newsletters article', function() {
        browser.get('/newsletters/forbes-investor-edge/2015/09/30/21-secrets-to-maxing-out-your-social-security/'); 
    });
    
    it('should have the title of the article', function() {
        expect(element(by.css('#bottom-rail>h1')).getText()).toEqual('21 Secrets To Maxing Out Your Social Security'); 
    });
    
    it('should have the published timestamp', function() {
        expect(element(by.className('date')).getText()).toEqual('9/30/2015 @ 1:45PM'); 
    });
    
});