var LegacyArticle = require('./legacyarticle.page.js'),
	legacyArticle  = new LegacyArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    // add the cookies here
});

describe('Legacy Article Pages:', function() {
    
	it('should get the page', function() {
		legacyArticle.get();
	});
    
});