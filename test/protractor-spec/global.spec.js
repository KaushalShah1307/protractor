globals = {};

var http = require('http');
httpGet = function(siteUrl) {
	var defer = protractor.promise.defer();

	http.get(siteUrl, function(response) {

		defer.fulfill({
			statusCode: response.statusCode
		});

		response.setEncoding('utf8');

		// response.on('data', function() {

		// 	console.log(siteUrl);
		// 	defer.resolve({
		// 		statusCode: response.statusCode
		// 	});
		// });

	}).on('error', function(e) {
		defer.reject("Got http.get error: " + e.message);
	});

	return defer.promise;
}

var checked = [];
globals.testAllLinks = function() {
	// browser.getCurrentUrl().then(function(url) {
		// describe('Links on '+url+ ':', function() {
			browser.findElements(by.css('a')).then(function(links) {
				links.forEach(function(element) {
					element.getAttribute('href').then(function(href) {

						if (href && href.indexOf('mailto') < 0 && href.indexOf('https') < 0 && checked.indexOf(href) < 0) {
							checked.push(href);
							// console.log(href);
							httpGet(href).then(function(result) {
								describe(href, function() {
									console.log(href);
									it('should not 404', function() {
										console.log('it',href);
										expect(result.statusCode).toBeLessThan(400);
									});
								});
							});
						}

					});
				});
			});
		// });
	// });
}
var Firebase = require('firebase');

// globals.firebase = new Firebase('https://protractor-forbes.firebaseio-demo.com/');