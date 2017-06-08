var ListProfiles = require('./profiles.page.js'),
	listProfiles  = new ListProfiles();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('List Profile Page:', function() {
    
    var next = element(by.className('next'));
    var prev = element(by.className('prev'));
    
	it('should get the page', function() {
		listProfiles.get();
	});
    
    it('should have the profile header', function() {
        expect(element(by.tagName('header')).isPresent()).toBe(true); 
    });
    
    it('should have the profile person name', function() {
        expect(element.all(by.className('name')).first().getText()).toEqual('Bill Gates'); 
    });
    
    it('should have the nav bar', function() {
        expect(element(by.className('nav')).isPresent()).toBe(true); 
    });
    
    it('should have the profile rank in the nav bar', function() {
        expect(element(by.className('nav-rank')).getText()).toEqual('#1'); 
    });

    it('should have the profile image', function() {
        expect(element(by.css('.featured-image>img')).isPresent()).toBe(true);
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
    
    it('should expand the bio/dek', function() {
        element(by.css('.more-less.more')).click();
        expect(element(by.className('biography canfade more-less-border')).getText().length > 0);
    });
    
    it('should have the did-you-know section', function() {
        expect(element(by.className('did-you-know')).isPresent()).toBe(true); 
    });
    
    it('should have content in the did-you-know section', function() {
        expect(element.all(by.className('centered-div')).first().getText().length > 0); 
    });
    
    it('should have the networth chart', function() {
        expect(element(by.className('net-worth-chart')).isPresent()).toBe(true); 
        expect(element(by.className('historical')).isPresent()).toBe(true); 
    });
    
    it('should have the tweet-quote modeule', function() {
        expect(element(by.className('quote')).isPresent()).toBe(true); 
        expect(element(by.className('quote-text')).getText().length > 0); 
        expect(element(by.className('quote-name')).getText()).toEqual('Bill Gates'); 
    });
    
    it('should have the connection module and its properties', function() {
        expect(element(by.className('connection')).isPresent()).toBe(true);
        expect(element(by.getContentUrl()path('/html/body/div[3]/div[6]/div/div/ul/li[1]/div[1]')).getText()).toEqual('Melinda Gates');
        expect(element(by.getContentUrl()path('/html/body/div[3]/div[6]/div/div/ul/li[1]/div[2]')).getText()).toEqual('Spouse');
    });
    
    it('should have the stats module', function() {
        expect(element(by.className('stats')).isPresent()).toBe(true); 
    });
    
    it('should have the lists module', function() {
        expect(element(by.className('lists')).isPresent()).toBe(true); 
    });
    
    it('should have the newsworthy module', function() {
        expect(element(by.className('newsworthy')).isPresent()).toBe(true); 
    });
    
    it('should have the global footer', function() {
        expect(element(by.className('row clearfix csf-footer')).isPresent()).toBe(true); 
    });
    
    it('should have the next link in the nav', function() {
        expect(next.isPresent()).toBe(true);
    });
    
    it('should click to the next profile', function() {
        next.click();
        expect(browser.getCurrentUrl()).toContain('warren-buffet');
    });
    
    it('should have the previous link in the nav', function() {
        expect(prev.isPresent()).toBe(true);
    });
    
    it('should click to the previous profile', function() {
        prev.click();
        expect(browser.getCurrentUrl()).toContain('bill-gates');
    });
    
});

describe('List Profile Page Ads:', function() {
   
    it('should have ads', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots()).length')).toBe(6); 
    });
    
    it('should have the top ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[0].T')).toContain('scp=pos%3Dtop'); 
    });
    
    it('should have the rec ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[1].T')).toContain('scp=pos%3Drec'); 
    });
    
    it('should have the railrec ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[2].T')).toContain('scp=pos%3Drailrec'); 
    });
    
    it('should have the text ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[3].T')).toContain('scp=pos%3Dtext'); 
    });
    
    it('should have the loge ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[4].T')).toContain('scp=pos%3Dloge'); 
    });
    
    it('should have the moreon ad', function() {
        expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())[5].T')).toContain('scp=pos%3Dmoreon'); 
    });
    
});