var ListProfiles = function() {
  this.get = function() {
    //browser.get('/forbespress', 5000);
    browser.get('/profile/bill-gates/?list=billionaires', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = ListProfiles;