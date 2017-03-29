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