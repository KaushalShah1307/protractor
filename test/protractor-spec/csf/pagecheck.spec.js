var CSFPage = require('./csf.page.js');
describe('CSF', function() {
	describe('General-', function() {
		beforeEach(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			var csfPage = new CSFPage();
			csfPage.get();
		});

		it('should have ads', function() {
			browser.executeAsyncScript(function() {
				callback = arguments[0];
				callback(Object.keys($('body').injector().get('CsfAdService').ad_slots));
			}).then(function(result) {
				result.forEach(function(key) {
					expect(key).toHaveAd();
				});
			});
		});

		globals.testAllLinks();
	});
});