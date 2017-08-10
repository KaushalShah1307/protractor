var SimpleSeries = function() {
  this.get = function() {
    browser.get('/series/capitalonesparkvoice/?view=simple-site', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = SimpleSeries;