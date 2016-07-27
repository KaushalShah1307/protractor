describe('ContribHP', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking', function() {
		describe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			it ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).toMatch(currentUrl.replace(browser.baseUrl,'http://www-staging.forbes.com/'));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.authorType);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.authorType);
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
			});
		});
	});
});
