describe('globals',function() {

	var customMatchers = {
		toNot404: function(util, customEqualityTesters) {
			return {
				compare: function(actual) {
					httpGet(actual.href).then(function(response) {
						result.pass = response.statusCode <400;

						if (result.pass) {
							result.message = actual.href+ ' did not 404.'
						} else {
							result.message = actual.href+ ' 404d!'
						}
						return result;
					});
				}
			}
		}
	}

	beforeEach(function() {

		jasmine.addMatchers(customMatchers);
	});
	globals = {};

	var http = require('http');
	httpGet = function(siteUrl) {
		var defer = protractor.promise.defer();

		http.get(siteUrl, function(response) {
			// console.log(response.statusCode);

			defer.fulfill({
				statusCode: response.statusCode
			});

		}).on('error', function(e) {
			defer.reject("Got http.get error: " + e.message);
		});

		return defer.promise;
	}
	httpGetResponse = function(siteUrl) {
		var defer = protractor.promise.defer();

		http.get(siteUrl, function(response) {
			// console.log(response.statusCode);

			defer.fulfill(response.statusCode);

		}).on('error', function(e) {
			defer.reject("Got http.get error: " + e.message);
		});

		return defer.promise;
	}

	var testedLinks = {};
	var counter = 0;
	globals.testAllLinks = function(done) {
		// describe('links', function() {
				// console.log('it');
			// it('should not 404', function(done) {
				// console.log(testedLinks);
				$$('a').filter(function(element) {
					return element.getAttribute('href').then(function(href) {
						var flag = (href && !testedLinks[href] && href.indexOf('http') === 0 && href.indexOf('https') < 0) ? true : false;
						if (flag) {
							testedLinks[href] = true;
						}
						// console.log(href,flag);
						return flag;
					});
				}).map(function(element, index) {
					return {
						href: element.getAttribute('href'),
					}
				}).then(function(links, index) {
					var linksToBeChecked = links.length;

					if(linksToBeChecked.length === 0) {
						done();
					}

					links.forEach(function(link) {
						// describe(link.href, function() {
							httpGet(link.href).then(function(result) {
								expect(result.statusCode).toBeLessThan(400);
								// console.log(link);
								if (--linksToBeChecked === 0) {
									done();
								}

							});
						// })
					});
				});
			// });
		// });
	}
	var Firebase = require('firebase');

	// globals.firebase = new Firebase('https://protractor-forbes.firebaseio-demo.com/');
});