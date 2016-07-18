/**
 * Created by kshah on 7/18/2016.
 */
var searchPage = function() {
	this.get = function() {
		browser.get('/search/');
		browser.executeAsyncScript(function() {
			callback = arguments[0];
			callback($('body').injector().get('SearchAppState').page_data.gallery);
		}).then(function(result) {
			this.page_data = result;
		}).then(function() {
			browser.current_page = this;
		});
		browser.getCurrentUrl().then(function(url) {
			browser.current_url = url;
			globals.pagesChecked.push(url);
		});
	};

	this.adsService = 'SearchAdsService';
};
module.exports = searchPage;
