/**
 * Created by kshah on 5/13/2016.
 */
describe('Angular Gallery', function() {
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
				expect(globals.getParam(trackingPixel.srcString, 'su') + '/').toEqual(currentUrl.replace(browser.baseUrl,"http://www-staging.forbes.com/"));
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual(browser.current_page.page_data.channel.omnitureChannel.toLowerCase());
				expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual(browser.current_page.page_data.channel.omnitureSection.toLowerCase());
				expect(globals.getParam(trackingPixel.srcString, 'pt')).toEqual('slide');
				expect(globals.getParam(trackingPixel.srcString, 'i')).contains('blogAndSlideId/blog/slide/');
				expect(globals.getParam(trackingPixel.srcString, 'au')).contains('blogAuthorId/blog/author/');
			});
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

		xit('should pass the right custom parameters', function() {
			expect(dataLayer.DFPSite).toEqual('fdc.forbes');
			expect(dataLayer.DFPZone).toEqual('pictures-rc-b');
			expect(dataLayer.author).toBe('Kurt Badenhausen');
			expect(dataLayer.channel).toEqual(browser.current_page.page_data.displayChannel);
			expect(dataLayer.slot).toEqual(browser.current_page.page_data.specialSlot);
			expect(dataLayer.site).toEqual('kurtbadenhausen');
			expect(dataLayer.pageType).toEqual('slide');
		});
	});

});
