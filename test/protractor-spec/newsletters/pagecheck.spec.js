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
    
});

describe('Newsletters Blog', function() {
   
    it('should get the page', function() {
        browser.get('/newsletters/forbes-investor-edge/'); 
    });
    
    it('should have the blog logo', function() {
        expect(element(by.className('image-name')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the title', function() {
        expect(element(by.css('.title-text>h1')).getText()).toEqual('Forbes Investor Edge'); 
    });
    
    it('should have the slug', function() {
        expect(element(by.className('slug')).getText()).toEqual('Investment ideas you can profit from'); 
    });
    
    it('should have the follow on social icons', function() {
        expect(element(by.className('social')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have the month in the stream', function() {
        expect(element(by.className('month')).getText().length > 0); 
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
    
});