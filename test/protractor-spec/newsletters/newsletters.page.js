var Newsletters = function() {
  this.get = function() {
    //browser.get('/forbespress', 5000);
    browser.get('/newsletters', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = Newsletters;