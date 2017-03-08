var CSRPage = require('./csr.page.js'),
	csrPage = new CSRPage();
describe('CSR', function() {
	it('should get the page', function() {
		csrPage.get();
	});
    
    it('should have the channel/section name', function() {
       expect(element(by.className('channel-name')).getText()).toEqual('LEADERSHIP'); 
    });
    
    it('should have the channel/section name in the stream block', function() {
       expect(element(by.className('csr-common-stream-header')).getText()).toEqual('LEADERSHIP NOW'); 
    });
    
    it('should have the load-more button on the steam', function() {
       var loadMore = element(by.className('load-more-bg')); 
    });

	globals.generalCheck();

	globals.checkAds(csrPage.adsService);
});