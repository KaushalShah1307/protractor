var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/gordonkelly/2015/09/19/apple-ios-9-secrets/');

describe('Article', function() {
	// beforeAll(function(done) {
	// 	var request = require('request');
	// 	request('http://192.168.16.24/forbesapi/content/all.json?retrievedfields=uri&types=blogslide,blog&limit=1', function(error,response,body) {
	// 		if (!error && response.statusCode == 200) {
	// 			articlePage.url = JSON.parse(body).contentList[0].uri.replace('http://www.forbes.com','');
	// 			done();
	// 		}
	// 	});
	// });

	it('should get the page', function() {
		articlePage.get();
	});

	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
