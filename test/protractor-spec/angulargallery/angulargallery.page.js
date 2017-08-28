/**
 * Created by kshah on 5/13/2016.
 */
var angularGalleryPage = function() {
	this.get = function() {
		browser.get('/pictures/mli45fdllh/1-maria-sharapova/');
		browser.executeAsyncScript(function() {
			callback = arguments[0];
			callback($('body').injector().get('GalleryAppState').page_data.gallery);
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

	this.adsService = 'GalleryAdsService';
};
module.exports = angularGalleryPage;
