describe('Article', function() {
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
				expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual(currentUrl.replace(browser.baseUrl, "http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual(browser.current_page.page_data.type);
				expect(globals.getParam(trackingPixel.srcString, 'i')).toEqual(browser.current_page.page_data.naturalId);
				expect(globals.getParam(trackingPixel.srcString, 'at')).toEqual(browser.current_page.page_data.blogType);
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.displayChannel);
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual(browser.current_page.page_data.authors[0].naturalId);
			});
		});

		describe('Google Analytics', function() {
			var dataLayer;
			beforeAll(function() {
				browser.executeScript(function() {
					return dataLayer[0];
				}).then(function(result) {
					dataLayer = result;
				});
			});

			it('should pass the right custom parameters', function() {
				// expect(dataLayer.brandvoice).toBe(null);
				expect(dataLayer[0].author).toEqual('Gordon Kelly');
				expect(dataLayer[0].channel).toEqual(browser.current_page.page_data.displayChannel);
				expect(dataLayer[0].slot).toEqual(browser.current_page.page_data.specialSlot);
				// expect(dataLayer.DFPSite).toEqual('fdc\.forbes');
				expect(dataLayer[0].site).toEqual('gordonkelly');
				// expect(dataLayer.pageType).toEqual(browser.current_page.page_data.type + ':doge');
				// expect(dataLayer.referrer).toEqual('');
				// expect(dataLayer.blogType).toEqual(browser.current_page.page_data.blogType);
				expect(dataLayer[0].DFPZone).toEqual('article-d');

			});
		});
	});
});
