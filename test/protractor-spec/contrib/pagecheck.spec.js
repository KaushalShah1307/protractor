var ContribPage = require('./contribhp.page.js'),
	contribPage = new ContribPage();

describe('ContribHP:', function() {
	it('should get the page', function() {
		contribPage.get();
	});
    
    it('should have pageviews in the stream', function() {
        expect(element.all(by.className('article-views')).first().getText().length > 0); 
    });
    
    it('should have the About section', function() {
        expect(element(by.className('author-description')).getText().length > 0); 
    });

    it('should have the Our Contributors section', function() {
        expect(element(by.className('writers clearfix')).getText().length > 0); 
    }); 
    
    it('should have the most popular section', function() {
        expect(element(by.className('head-popular')).getText()).toEqual('MOST POPULAR'); 
    });
    
    it('should have the page views on the most popular cards', function() {
        expect(element.all(by.className('trending-reason')).first().getText().length > 0); 
    });
    
    xit('should click on the author from the Our Contributor section', function() {
        element.all(by.repeater('contributor in author.contributors').row(0)).click();
        element(by.className('close-btn')).click();
    });    
    
    xit('should have archive/latest menu on the stream', function() {
        var archiveMenu = element(by.css('.toggle-archive.ng-binding.ng-scope'));
        expect(archiveMenu.getText()).toEqual('ARCHIVE');
        archiveMenu.click();
        expect(archiveMenu.getText()).toEqual('LATEST');  
    });
    
    it('should have the what-is-this blurb for Brandvoice', function() {
        var bvBlurb = element(by.className('what-is-this'));
        expect(bvBlurb).toBeTruthy();
        bvBlurb.click();
        expect(element(by.className('brandvoice-explained'))).toBeTruthy();
        element(by.className('close-button')).click();
    });
    
    it('should have correct og:url', function() {
        var ogUrl = $('meta[property="og:url"]').getAttribute('content');
        expect(ogUrl).toEqual('http://www.forbes.com/sites/northwesternmutual/');
    });    
    
    
	//globals.generalCheck();

	globals.checkAds(contribPage.adsService);
});