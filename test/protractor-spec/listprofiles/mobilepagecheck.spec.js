var ListProfiles = require('./profiles.page.js'),
	listProfiles  = new ListProfiles();

beforeEach(function(){
    browser.ignoreSynchronization = true; 
});

describe('List Profile Page:', function() {
    
	it('should get the page', function() {
		listProfiles.get();
	});
    
    it('should have the profile header', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the profile person name', function() {
        expect(element.all(by.className('name')).first().getText()).toEqual('Bill Gates'); 
    });

    it('should have the profile image', function() {
        expect(element(by.css('.featured-image>img')).isPresent()).toBe(true);
    });
    
    it('should have the profile rank on the profile image', function() {
        expect(element.all(by.className('rank')).first().getText()).toEqual('#1'); 
    });
    
    it('should have the profile info', function() {
        expect(element(by.className('featured-text')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have real-time networth date stamp', function() {
        expect(element(by.className('primary-networth')).getText()).toContain('REAL TIME NET WORTH — as of '); 
    });
    
    it('should have real-time networth value', function() {
        expect(element(by.className('primary-amount')).getText().length > 0); 
    });
    
    it('should have current year networth date stamp', function() {
        expect(element(by.className('secondary-networth')).getText()).toContain('2017 BILLIONAIRES NET WORTH — as of '); 
    });
    
    it('should have current year networth value', function() {
        expect(element(by.className('secondary-amount')).getText().length > 0); 
    });
    
    it('should have the did-you-know section', function() {
        expect(element(by.className('did-you-know')).isPresent()).toBe(true); 
    });
    
    it('should have content in the did-you-know section', function() {
        expect(element.all(by.className('centered-div')).first().getText().length > 0); 
    });
    
    it('should have the networth chart', function() {
        expect(element(by.className('net-worth-chart')).isPresent()).toBe(true); 
    });
    
    it('should have the tweet-quote module', function() {
        expect(element(by.className('quote')).isPresent()).toBe(true); 
        expect(element(by.className('quote-text')).getText().length > 0); 
        expect(element(by.className('quote-name')).getText()).toEqual('Bill Gates'); 
    });
    
    it('should have the lists module', function() {
        expect(element(by.className('lists')).isPresent()).toBe(true); 
    });
    
    it('should have the newsworthy module', function() {
        expect(element(by.className('newsworthy')).isPresent()).toBe(true); 
    });
    
    it('should have the stats module', function() {
        expect(element(by.className('stats')).isPresent()).toBe(true); 
    });
    
    it('should have the global footer', function() {
        expect(element(by.className('row clearfix csf-footer')).isPresent()).toBe(true); 
    });
    
});