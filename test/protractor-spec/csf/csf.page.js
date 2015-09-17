var CSFPage = function() {
  this.get = function() {
    browser.get('/next-billion-dollar-startups/');
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('CsfAppState').page_data);
	}).then(function(result) {
		this.page_data = result;
	}).then(function() {
		browser.current_page = this;
	});
  };

  this.adsService = 'CsfAdService';
};
module.exports = CSFPage;