var AMPArticle = require('./amparticle.page.js'),
	ampArticle  = new AMPArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('AMP Article Page', function() {
	it('should get the page', function() {
		ampArticle.get();
	});

//	globals.generalCheck();

//	globals.checkAds(ampArticle.adsService);
});