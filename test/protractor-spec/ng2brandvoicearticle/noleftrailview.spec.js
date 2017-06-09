describe('NG2 Article on Smaller Breakpoint:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});
    
    describe('Vestpockets:', function() {

        it('should have vestpockets', function() {
            var vestpocket = element(by.css('.vestpocket'));
            expect(vestpocket.isPresent()).toBe(true);
            expect(element(by.css('.slick-initialized.slick-slider')).isPresent()).toBe(true);
        });

        it('should not have brandvoice treatment', function() {
            var brandVoiceStyling = element(by.css('.brandvoice'));
            expect(browser.isElementPresent(brandVoiceStyling)).toBe(true);
        });
    
    });
    
    describe('Trending Drawer:', function() {
        var trendingDrawer = element(by.css('.trending'));

        it('should have trending drawer', function() {
            expect(trendingDrawer.isPresent()).toBe(true);
        });

        it('should click to expand trending drawer', function() {
            trendingDrawer.click();
            expect(element(by.css('.siderail-container')).isPresent()).toBe(true);
            var articleUrl = '/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/';
            expect(element.all(by.css('.current-inline>inline-article>a')).first().getAttribute('href')).toContain(articleUrl);
            trendingDrawer.click();
        });
    
    });
});
