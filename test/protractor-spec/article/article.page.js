var ArticlePage = function(url) {
  this.get = function() {
    browser.get(url, 5000);
  };

  this.adsService = 'ArticleAdsService';
};
module.exports = ArticlePage;