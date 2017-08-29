describe('Forbes Marketplace Article:', function() {
        
        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/forbesmarketplace/2017/05/18/forbes-nonprofit-council-members-are-expanding-globally-saving-lives-and-more/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have marketplace logo', function() {
            var logo = element(by.css('.marketplace-logo'));
            expect(logo.getText()).toEqual('Marketing,');
        });
        
        it('should have marketplace blurb', function() {
            var descretion = element.all(by.css('.tag>span')).get(0);
            var blurb = element.all(by.css('.tag>span')).get(1);
            expect(descretion.getText()).toEqual('detailed information on Forbes products.');
            expect(blurb.getText()).toEqual('What is This?');
        });
        
        it('should have contributor legal disclaimer', function() {
            var legalDisclaimer = element(by.css('.legal-disclaimer'));
            expect(legalDisclaimer.getText()).toEqual('Opinions expressed by Forbes Contributors are their own.');
        });
    });      
    
describe('Template Type: noads:', function() {

    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/careers-at-forbes/2017/05/18/forbes-career-opportunity-junior-analyst-programmatic-optimization/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have templatetype: noads', function() {
        expect(browser.executeScript('return window.Object.values(window.dataLayer[0])[8]')).toEqual('blog:noads');
    });

    it('should not have ads', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots).length')).toBe(3); 
    });

    it('should have templatetype=noads for all the ad calls', function() {
        var i;
        var j = browser.executeScript('return window.Object.values(googletag.pubads().getSlots()).length');
        for (i=0; i <= j; i++) {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())['+i+'].getContentUrl()')).toContain('templatetype%3Dnoads');
        };
    });

    it('should not have the medianet unit', function() {
        var mnetUnit = element(by.id('_mN_dy_289199738'));
        expect(browser.isElementPresent(mnetUnit)).toBe(false);     
    });

    it('should not have the revcontent unit', function() {
        var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
        expect(browser.isElementPresent(revContent)).toBe(false);
    });
});       

describe('Template Type: takeover:', function() {

    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/qa/2013/05/24/link-mozilla-developer-network-dom-developer-guide/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have templatetype: takeover', function() {
        expect(browser.executeScript('return window.Object.values(window.dataLayer[0])[8]')).toContain(':takeover');
    });

    it('should have ads', function() {
        expect(browser.executeScript('return window.Object.values(external_services.ad_slots).length')).toBe(5); 
    });

    it('should not have the medianet unit', function() {
        var mnetUnit = element(by.id('_mN_dy_289199738'));
        expect(browser.isElementPresent(mnetUnit)).toBe(false);     
    });

    it('should not have the revcontent unit', function() {
        var revContent = element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first();
        expect(browser.isElementPresent(revContent)).toBe(false);
    });
});

describe('Source=bloomberg:', function() {

    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/?view=prod&source=bloomberg';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have bbgterm=true', function() {
        var i;
        var j = browser.executeScript('return window.Object.values(googletag.pubads().getSlots()).length');
        for (i=0; i <= j; i++) {
            expect(browser.executeScript('return window.Object.values(googletag.pubads().getSlots())['+i+'].getContentUrl()')).toContain('bbgterm%3Dtrue');
        };     
    });
});       
    
describe('Magazine:', function() {

    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/lewisdvorkin/2017/06/07/inside-forbes-great-people-at-the-core-of-the-now-and-whats-next/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    it('should have magazine blurb', function() {
        var magazineBlurb = element(by.css('.magazine'));
        expect(browser.isElementPresent(magazineBlurb)).toBe(true);
        expect(magazineBlurb.getText()).toEqual('This story appears in the June 29, 2017 issue of Forbes. Subscribe');
    });
});