var ForbesPress = require('./forbespress.page.js'),
	forbesPress = new ForbesPress();

var legalLinks = element.all(by.css('.ng-tns-c6-1'));

describe('Bertie:', function() {
    
	it('should get the page', function() {
		forbesPress.get();
	});
    
    describe('should login', function() {
    
        it('should have login module', function() {
            expect(element(by.css('.container')).isDisplayed()).toBe(true); 
        });
        
        it('should have forbes logo', function() {
            expect(element(by.css('.icon.icon-forbes-logo')).isDisplayed()).toBe(true); 
        });

        it('should login', function() {
            element(by.name('username')).sendKeys('qa_automation');
            element(by.name('password')).sendKeys('qa_automation');
            element(by.name('authentication')).sendKeys('918273');
            element(by.tagName('button')).click();
            browser.sleep(1000);
            expect(element(by.css('.error-text.ng-tns-c6-1')).isDisplayed()).toBe(false);
        });
    });
    
    describe('should have Privacy & Terms links', function() {
        
        it('should have Privacy link', function() {
            expect(legalLinks.get(13).getText()).toEqual('Privacy'); 
            expect(legalLinks.get(13).getAttribute('href')).toEqual('https://www.forbes.com/fdc/privacy.html'); 
        });
        
        it('should have Terms link', function() {
            expect(legalLinks.get(14).getText()).toEqual('Terms'); 
            expect(legalLinks.get(14).getAttribute('href')).toEqual('https://www.forbes.com/terms'); 
        });
    });
    
    describe('should have password forgot link', function() {
        expect(element(by.css('.forgot.ng-tns-c6-1')).getAttribute('href')).toEqual('/login/forgot'); 
    });

});

/*
describe('ForbesPress Dashboard:', function() {
	it('should get the page', function() {
		forbesPress.get();
	});
    
    it('should have the ForbesPress logo', function() {
        expect(element(by.className('logo')).getText().length > 0); 
    });
    
    it('should have the author name', function() {
        //expect(element(by.css('.author')).getText()).toEqual('My Guy'); 
        expect(element(by.css('.author')).getText()).toBeTruthy(); 
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

describe('ForbesPress Article Page:', function() {
    
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
    
    it('should have the excerpt toggle', function() {
        expect(element(by.className('toggle')).isDisplayed()).toBeTruthy();
    });
    
});

describe('Publish a ForbesPress Article Page:', function() {
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
/*    it('should have the published article on the top of the recent articles on dashboard', function() {
        forbesPress.get('https://www-staging.forbes.com/forbespress/#/dashboard', 5000);  
        expect(element(by.css('.headline')).getText()).toEqual(articleHeadline);
    });
    
    it('should have the published status', function() {
        expect(element(by.css('.published')).getText()).toEqual('PUBLISHED'); 
    });
    
    it('should show the last modified date', function() {
        expect(element(by.css('.last-published.truncate')).getText()).toContain('/'); 
    });
    
});

describe('Draft a ForbesPress Article Page:', function() {
    var articleHeadline = 'This is the automated test article from protractor - DRAFT';
    
    it('should click on create to componse a new article', function() {
        forbesPress.get('https://www-staging.forbes.com/forbespress/#/dashboard');
        element(by.className('fp-button button-new')).click();
    });
    
    it('should add headline on the new article', function() {
        element(by.className('title fs-headline headline-input')).sendKeys(articleHeadline);
    });
    
    it('should add text to the article body', function() {
        element(by.className('ql-editor ql-blank')).click().sendKeys('This is the article body');
    });
    
    it('should click the save button', function() {
        element(by.className('fp-button button-save')).click();
    });
    
    it('should have the DRAFT article on the top of the recent articles on dashboard', function() { 
        element(by.className('logo')).click();
        expect(element(by.css('.headline')).getText()).toEqual(articleHeadline);
    });
    
    it('should have the DRAFT status', function() {
        expect(element(by.css('.not-published')).getText()).toEqual('DRAFT'); 
    });
    
    it('should show the last modified date', function() {
        expect(element(by.css('.last-published.truncate')).getText()).toContain('/'); 
    });
    
});
*/