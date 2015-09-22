var CSFPage = function() {
  this.get = function() {
    browser.get('/vinyl/');
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('CsfAppState').page_data);
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

  this.adsService = 'CsfAdService';
};
module.exports = CSFPage;