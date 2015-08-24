var Firebase = require('firebase');

globals = {};

httpGet = function(siteUrl) {
	var http = require('http');
	var defer = protractor.promise.defer();

	http.get(siteUrl, function(response) {

	response.setEncoding('utf8');

	response.on('end', function() {
		defer.fulfill({
			statusCode: response.statusCode
		});
	});

	}).on('error', function(e) {
		defer.reject("Got http.get error: " + e.message);
	});

	return defer.promise;
}

var checked = [];
globals.testAllLinks = function() {
	browser.getCurrentUrl().then(function(url) {
		browser.findElements(by.css('a')).then(function(links) {
			links.forEach(function(element) {
				element.getAttribute('href').then(function(href) {

					if (href && href.indexOf('mailto') < 0 && href.indexOf('https') < 0 && checked.indexOf(href) < 0) {
						checked.push(href);
						describe(href + ' on ' + url, function() {
							it('should not 404', function() {
								httpGet(href).then(function(result) {
									expect(result.statusCode).toBeLessThan(305);
								});
							});
						});
					}

				});
			});
		});
	});
}

globals.firebase = new Firebase('https://protractor-forbes.firebaseio-demo.com/');