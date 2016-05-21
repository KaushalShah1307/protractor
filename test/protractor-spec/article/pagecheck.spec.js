var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage('/sites/gordonkelly/2015/09/19/apple-ios-9-secrets/');

describe('Article', function() {

	it('should mock the cookie for forbesbeta = A', function() {
		var mock_code = function () {
			angular.module('httpBackendMock', ['ngMockE2E', 'ngCookies'])
				.run(function ($httpBackend, $cookies) {
					$cookies.fobesbeta = 'A';
				});
		}
		});

	it('should get the page', function() {
		articlePage.addMockModule('httpBackendMock', mock_code);
		articlePage.get();
	});

	globals.generalCheck();
	globals.checkAds(articlePage.adsService);
});
