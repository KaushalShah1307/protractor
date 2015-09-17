var ContribPage = function() {
  this.get = function() {
    browser.get('/sites/gordonkelly/',5000);
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('ContribAppState').page_data.author);
	}).then(function(result) {
		this.page_data = result;
	}).then(function() {
		browser.current_page = this;
	});
  };

  this.adsService = 'ContribAdService';
};
module.exports = ContribPage;