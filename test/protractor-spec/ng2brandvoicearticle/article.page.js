var ArticlePage = function() {
	this.get = function() {
    browser.get('/sites/qualityassurance/2008/03/09/testing-angular-js-apps-with-protractor/?view=beta-u');
    //browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = ArticlePage;