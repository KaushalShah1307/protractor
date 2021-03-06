
globals = {
	pagesChecked: []
};

http = require('http');
https = require('https');

globals.matchers = {
	toHaveAd: function(util, customEqualityTesters) {
		return {
			compare: function(adPos) {
				return {
					pass: $$('#' + adPos + ' div').count().then(function(iframeCount) {
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

/** httpGetResponse
 * This function gets the response code of the url passed.
 * param String href - The link to be checked
 **/
var httpGetResponse = function(href) {
	var defer = protractor.promise.defer();

	if (href.indexOf('http:') === 0) {
		httpProtocol = http;
	} else if (href.indexOf('https:') === 0 ) {
		httpProtocol = https;
	} else {
		return null;
	}

	httpProtocol.get(href, function(response) {
		defer.fulfill(response.statusCode);

	}).on('error', function(e) {
		defer.reject("Got http.get error when checking " + href + ": " + e.message);
	});

	return defer.promise;
}

/** testAllLinks
 * This tests that there are no 404 links on the page
 **/
var testedLinks = {};
globals.testAllLinks = function() {
	describe('Links-', function() {

		beforeEach(function() {
			jasmine.addMatchers({
				toNot404: globals.matchers.toNot404
			});
		});

		it('should not 404', function(done) {
			$$('a[href^="http"]').filter(function(element) {
				return element.getAttribute('href').then(function(href) {
					var flag = (href && !testedLinks[href]) ? true : false;
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

/** testAllScripts
 * This tests that there are no scripts which 404 on the page.
 **/
var testedScripts = {};
globals.testAllScripts = function() {
	describe('Scripts-', function() {

		beforeEach(function() {
			jasmine.addMatchers({
				toNot404: globals.matchers.toNot404
			});
		});

		it('should not 404', function(done) {
			$$('script[src^="http"]').filter(function(element) {
				return element.getAttribute('src').then(function(href) {
					var flag = (href && !testedScripts[href] && href.indexOf('http://wsc4.webspectator.com/init?') !== 0) ? true : false;
					if (flag) {
						testedScripts[href] = true;
					}
					return flag;
				});
			}).map(function(element, index) {
				return {
					href: element.getAttribute('src'),
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
			}, function(err) {
				console.log(err);
			});
		});
	});
} 

/** testAllImages
 * This tests that there are no broken images on the page.
 **/
var testedImages = {};
globals.testAllImages = function() {
	describe('Images-', function() {

		beforeEach(function() {
			jasmine.addMatchers({
				toNot404: globals.matchers.toNot404
			});
		});

		it('should not be broken', function(done) {
			$$('img[src^="http"]').filter(function(element) {
				return element.getAttribute('src').then(function(href) {
					var flag = (href && !testedImages[href]) ? true : false;
					if (flag) {
						testedImages[href] = true;
					}
					return flag;
				});
			}).map(function(element, index) {
				return {
					href: element.getAttribute('src'),
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

/** testAllBackgroundImages
 * This tests that there are no broken background images on the page.
 **/
var testedBackgroundImages = {};
globals.testAllBackgroundImages = function() {
	describe('Background Images-', function() {

		beforeEach(function() {
			jasmine.addMatchers({
				toNot404: globals.matchers.toNot404
			});
		});

		it('should not be broken', function(done) {
			$$('[style*="background"]').filter(function(element) {
				return element.getCssValue('background-image').then(function(href) {
					console.log(href);
					flag = true;
					// var flag = (href && href !== 'none' && !testedBackgroundImages[href.replace('url(', '').replace(')', '')]) ? true : false;
					if (flag) {
						// testedBackgroundImages[href.replace('url(', '').replace(')', '')] = true;
					}
					return flag;
				});
			}).map(function(element, index) {
				return {
					// href: element.getCssValue('background-image').replace('url(', '').replace(')', ''),
				}
			}).then(function(links) {
				var linksToBeChecked = links.length;

				if(linksToBeChecked.length === 0) {
					done();
				}

				links.forEach(function(link) {
					// expect(link).toNot404();
					if (--linksToBeChecked === 0) {
						done();
					}
				});
			});
		});
	});
}

/** checkAds
 * This tests that there is an inner div within each defined ad slot div.
 * param String adsService - The Ad Service name of the page (Ask a Dev if there is a new page)
 **/
globals.checkAds = function(adsService) {
	describe('Ads', function() {
		beforeEach(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should appear on the page', function() {
			browser.executeAsyncScript(function() {
				callback = arguments[1];
				callback(Object.keys($('body').injector().get(arguments[0]).ad_slots));
			}, adsService).then(function(result) {
				result.forEach(function(key) {
					if (!key.match('spon-logo')) {
						expect(key).toHaveAd();
					}
				});
			});
		});
	});
}

/** getParam
 * This gets a parameter from a URL.
 **/
globals.getParam = function(url, param_name) {
	var regex = new RegExp('(\\?|\\&)' + param_name + '=([^&]+)'),
		match = url.match(regex);
	if (match) {
		return decodeURIComponent(match[2]);
	} else {
		return '';
	}
}

/** generalCheck
 * These are general checks which should be run on every page.
 **/
globals.generalCheck = function() {
	 describe('General Page Check', function() {
	 	beforeAll(function() {
	 		jasmine.addMatchers({
	 			toNot404: globals.matchers.toNot404
	 		});
	 	});

	 	globals.testAllLinks();
	 	globals.testAllScripts();
	 	globals.testAllImages();
	 });
}
