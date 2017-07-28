var ForbesPress = function() {
  this.get = function() {
    //browser.get('/forbespress', 5000);
    browser.get('https://www-staging.forbes.com/forbespress/#/dashboard', 5000);
    //browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = ForbesPress;