describe('globals',function() {
	globals = {};

	var http = require('http');
	httpGet = function(siteUrl) {
		var defer = protractor.promise.defer();

		http.get(siteUrl, function(response) {

			defer.fulfill({
				statusCode: response.statusCode
			});

		}).on('error', function(e) {
			defer.reject("Got http.get error: " + e.message);
		});

		return defer.promise;
	}

	var checked = [];
	globals.testAllLinks = function() {
		describe('links', function() {
			it('should not 404', function(done) {
				$$('a').then(function(links) {
					links.forEach(function(element) {
						element.getAttribute('href').then(function(href) {

							if (href && href.indexOf('mailto') < 0 && href.indexOf('https') < 0 && checked.indexOf(href) < 0) {
								checked.push(href);
								httpGet(href).then(function(result) {
									console.log(href);
									expect(result.statusCode).toBeLessThan(305);
									setTimeout(function() {
										if(href === checked[checked.length - 1]) {
											done();
										}
									},500)
								});
							}

						});
					});
				});
			});
		});
	}
	var Firebase = require('firebase');

	// globals.firebase = new Firebase('https://protractor-forbes.firebaseio-demo.com/');
});