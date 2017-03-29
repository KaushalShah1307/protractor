var HomePage = function() {
  this.get = function() {
    browser.get('/', 10000);
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('CsfAppState').page_data.channel);
        callback($('body').injector().get('CsfAdService').slots_to_render);
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
module.exports = HomePage;