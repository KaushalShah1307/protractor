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
        expect(element(by.css('.author-header>h1')).getText()).toEqual('Forbes Investor Edge'); 
    });
    
});

describe('Newsletters Article', function() {
   
    it('should get the FREE newsletters article', function() {
        browser.get('/newsletters/forbes-investor-edge/2015/09/30/21-secrets-to-maxing-out-your-social-security/'); 
    });
    
});