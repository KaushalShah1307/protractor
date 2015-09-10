var ContribPage = require('./contribhp.page.js');
describe('ContribHP', function() {
	describe('General-', function() {
		beforeEach(function() {
			jasmine.addMatchers({
				toHaveAd: globals.matchers.toHaveAd
			});
		});

		it('should get the page', function() {
			var contribPage = new ContribPage();
			contribPage.get();
		});

		globals.testAllLinks();

		describe('Ads', function() {
			it('should appear on the page', function() {
				browser.executeAsyncScript(function() {
					callback = arguments[0];
					callback(Object.keys($('body').injector().get('ContribAdService').ad_slots));
				}).then(function(result) {
					result.forEach(function(key) {
						expect(key).toHaveAd();
					});
				});
			});
		})
	});
});