var CSRPage = function() {
  this.get = function() {
    browser.get('/leadership/', 5000);
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('CsfAppState').page_data.channel);
	}).then(function(result) {
		this.page_data = result;
	}).then(function() {
		browser.current_page = this;
	});
	browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
		globals.pagesChecked.push(url);
	}, 5000);
  };

  this.adsService = 'CsfAdService';
};
module.exports = CSRPage;
