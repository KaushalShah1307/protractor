var ForbesPress = require('./forbespress.page.js'),
	forbesPress = new ForbesPress();
describe('ForbesPress Dashboard', function() {
	it('should get the page', function() {
		forbesPress.get();
	});
    
    it('should have the ForbesPress logo', function() {
        expect(element(by.className('logo')).getText().length > 0); 
    });
    
    it('should have the author name', function() {
        expect(element(by.css('.author')).getText()).toEqual('My Guy'); 
    });
    
    it('should have the copyright module', function() {
        expect(element(by.className('copyright')).getText().length > 0); 
    });
    
    it('should land on the dashboard page', function() {
        expect(browser.getCurrentUrl()).toEqual('https://www-staging.forbes.com/forbespress/#/dashboard'); 
    });
    
    it('should have the create story button', function() {
        expect(element(by.className('fp-button button-new'))).toBeTruthy();
    });
    
    it('should click on the first headline', function() {
        var headLine = element(by.className('headline'));
        var dashbaordArticleTitle = element(by.className('title truncate')).getText();
        expect(dashbaordArticleTitle) > 0;
        headLine.click();
        expect(browser.getCurrentUrl()).toContain('compose?id=');
        expect(element(by.className('title fs-headline headline-input'))).toBeTruthy();
    });

	//globals.generalCheck();
}); 

describe('ForbesPress Article Page', function() {
    
    it('should load the dashboard page', function() {
        forbesPress.get('https://www-staging.forbes.com/forbespress/');
        element(by.className('fp-button button-new')).click();
    });
    
    it('should load the article page', function() {
        expect(browser.getCurrentUrl()).toContain('compose');
        expect(element(by.className('title fs-headline headline-input'))).toBeTruthy(); 
    });
    
    it('should check for empty headlines on a new article', function() {
        expect(element(by.className('title fs-headline headline-input')).getText().length > 0);
    });
    
    it('should check for empty article body on a new article', function() {
        expect(element(by.className('ql-editor ql-blank')).getText().length > 0);
    });
    
    it('should check for empty title on a new article', function() {
        expect(element(by.className('title')).getText().length > 0);
    });
    
    it('should have the save and the publish button', function() {
        expect(element(by.className('fp-button button-save')).getText()).toEqual('SAVE');
        expect(element(by.className('fp-button button-publish')).getText()).toEqual('PUBLISH');       
    });
    
});

describe('Compose a ForbesPress Article Page', function() {
    var articleHeadline = 'This is the automated test headline from protractor';
    
    it('should add headline on the new article', function() {
        element(by.className('title fs-headline headline-input')).sendKeys(articleHeadline);
    });
    
    it('should add text to the article body', function() {
        element(by.className('ql-editor ql-blank')).click().sendKeys('This is the article body');
    });
    
    it('should click the save and the publish button', function() {
        element(by.className('fp-button button-save')).click();
        element(by.className('fp-button button-publish')).click();
        forbesPress.get(browser.getCurrentUrl());
    });
    
/*    it('should get the published confirmation in a modal', function() {
        expect(element(by.className('modal-dialog')).isDisplayed()).toBeTruthy();
        expect(element(by.className('message')).getText()).toEqual('Your Story Published');
        expect(element(by.className('link')).getText() > 0);
    });
*/    
    it('should have the published article on the top of the recent articles on dashboard', function() {
        forbesPress.get('https://www-staging.forbes.com/forbespress/#/dashboard', 5000);  
        expect(element(by.css('.headline')).getText()).toEqual(articleHeadline);
    });
    
    it('should have the published status', function() {
        expect(element(by.css('.published')).getText()).toEqual('PUBLISHED'); 
    });
    
});