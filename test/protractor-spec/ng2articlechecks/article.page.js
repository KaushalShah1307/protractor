var ArticlePage = function() {
	this.get = function() {
    browser.get('/sites/qa/2013/04/01/link-mozilla-developer-network-document-object-model-reference/?view=beta-u');
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = ArticlePage;