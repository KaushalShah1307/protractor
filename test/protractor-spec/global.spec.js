
globals = {};

http = require('http');
https = require('https');

globals.matchers = {
	toHaveAd: function(util, customEqualityTesters) {
		return {
			compare: function(adPos) {
				return {
					pass: $$('#' + adPos + ' iframe').count().then(function(iframeCount) {
						return iframeCount > 0;
					}),
					message: 'pos=' + adPos + (this.pass ? ' has an ad' : ' does not have an ad')
				}
			}
		}
	},
	toNot404: function(utils, customEqualityTesters) {
		return {
			compare: function(link) {
				return {
					pass: httpGetResponse(link.href).then(function(linkResponse) {
						return linkResponse < 400;
					}),
					message: 'Link with href:' + link.href + (this.pass ? ' does not 404' : ' is a bad link')
				}
			}
		}
	}

}

var httpGetResponse = function(href) {
	var defer = protractor.promise.defer();

	if (href.indexOf('https') < 0) {
		httpProtocol = http;
	} else {
		httpProtocol = https;
	}

	httpProtocol.get(href, function(response) {

		defer.fulfill(response.statusCode);

	}).on('error', function(e) {
		defer.reject("Got http.get error: " + e.message);
	});

	return defer.promise;
}

var testedLinks = {};
globals.testAllLinks = function() {
	describe('Links-', function() {

		beforeEach(function() {
			jasmine.addMatchers({
				toNot404: globals.matchers.toNot404
			});	
		});

		it('should not 404', function(done) {
			$$('a').filter(function(element) {
				return element.getAttribute('href').then(function(href) {
					var flag = (href && !testedLinks[href] && href.indexOf('http') === 0) ? true : false;
					if (flag) {
						testedLinks[href] = true;
					}
					return flag;
				});
			}).map(function(element, index) {
				return {
					href: element.getAttribute('href'),
				}
			}).then(function(links) {
				var linksToBeChecked = links.length;

				if(linksToBeChecked.length === 0) {
					done();
				}

				links.forEach(function(link) {
					expect(link).toNot404();
					if (--linksToBeChecked === 0) {
						done();
					}
				});
			});
		});
	});
}