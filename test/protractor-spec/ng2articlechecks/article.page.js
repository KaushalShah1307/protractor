var ArticlePage = function() {
	this.get = function() {
    browser.get('/sites/leemathews/2017/05/16/wannacry-ransomware-ms17-010/?view=beta-u');
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = ArticlePage;