
globals = {};

var http = require('http');

globals.getModule = function(moduleName) {
	browser.executeAsyncScript(function(moduleName) {
		return $('body').injector().get(moduleName);
	}, moduleName)
}

globals.httpGet = function(siteUrl) {
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
globals.testAllLinks = function(done) {
	$$('a').filter(function(element) {
		return element.getAttribute('href').then(function(href) {
			var flag = (href && !testedLinks[href] && href.indexOf('http') === 0 && href.indexOf('https') < 0) ? true : false;
			if (flag) {
				testedLinks[href] = true;
			}
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
			// expect(link).toNot404();
			globals.httpGet(link.href).then(function(result) {
				expect(result.statusCode).toBeLessThan(400);
				console.log(link.href, result.statusCode);2
				if (--linksToBeChecked === 0) {
					done();
				}
			});
		});
	});
}