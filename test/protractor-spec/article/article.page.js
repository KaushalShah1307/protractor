var ArticlePage = function(url) {
  this.get = function() {
    browser.get(url, 5000);
	browser.executeAsyncScript(function() {
		callback = arguments[0];
		callback($('body').injector().get('ArticleAppState').page_data.articles.article_0.article);
	}).then(function(result) {
		this.page_data = result;
	}).then(function() {
		browser.current_page = this;
	});
  };

  this.adsService = 'ArticleAdsService';
};
module.exports = ArticlePage;