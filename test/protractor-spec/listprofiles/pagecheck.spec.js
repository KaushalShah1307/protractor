var ListProfiles = require('./profiles.page.js'),
	listProfiles  = new ListProfiles();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('List Profile Page', function() {
    
	it('should get the page', function() {
		listProfiles.get();
	});

    it('should have the profile image', function() {
        expect(element(by.css('.featured-image>img')).isPresent()).toBe(true);
    });
    
    it('should have the profile info', function() {
        expect(element(by.className('featured-text')).isDisplayed()).toBeTruthy(); 
    });
    
    it('should have real-time networth date stamp', function() {
        expect(element(by.className('primary-networth')).getText()).toEqual('REAL TIME NET WORTH — as of 4/13/17'); 
    });
    
    it('should have real-time networth value', function() {
        expect(element(by.className('primary-amount')).getText().length > 0); 
    });
    
    it('should have current year networth date stamp', function() {
        expect(element(by.className('secondary-networth')).getText()).toEqual('2017 BILLIONAIRES NET WORTH — as of 4/11/17'); 
    });
    
    it('should have current year networth value', function() {
        expect(element(by.className('secondary-amount')).getText().length > 0); 
    });
    
    it('should expand the bio/dek', function() {
        element(by.css('.more-less.more')).click();
        expect(element(by.className('biography canfade more-less-border')).getText().length > 0);
    });
    
    it('should have the did-you-know section', function() {
        expect(element(by.className('did-you-know')).isPresent()).toBe(true); 
    });
    
    it('should have content in the did-you-know section', function() {
        expect(element(by.className('centered-div')).getText().length > 0); 
    });
    
    it('should have the networth chart', function() {
        expect(element(by.className('net-worth-chart')).isPresent()).toBe(true); 
        expect(element(by.className('historical')).isPresent()).toBe(true); 
    });
    
});