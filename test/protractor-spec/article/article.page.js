var ArticlePage = function(url) {
	that = this;
	that.url = url;
	that.adsService = 'ArticleAdsService';
	that.get = function() {
		browser.get(that.url, 5000);
		browser.executeAsyncScript(function() {
			callback = arguments[0];
			callback($('body').injector().get('ArticleAppState').page_data.articles.article_0.article);
		}).then(function(result) {
			that.page_data = result;
		}).then(function() {
			browser.current_page = that;
		});
		browser.getCurrentUrl().then(function(url) {
			browser.current_url = url;
			globals.pagesChecked.push(url);
		});
	};
	return that;
};
module.exports = ArticlePage;