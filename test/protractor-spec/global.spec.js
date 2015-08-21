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

globals.testAllLinks = function() {
    var links = [];
    $$('a').each(function(element) {
      element.getAttribute('href').then(function(href) {
        if (href && href.indexOf('mailto') < 0 && href.indexOf('https') < 0) {
          links.push(href);
        }
      });
    });
    browser.waitForAngular().then(function() {
      links.forEach(function(url) {
          httpGet(url).then(function(result) {
            describe(url, function() {
              it('should not 404', function() {
                  expect(result.statusCode).toBeLessThan(305);
              });
            });
          });
      });
    });
}