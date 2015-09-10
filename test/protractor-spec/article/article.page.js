var ArticlePage = function(url) {
  this.get = function() {
  	console.log('getting article');
    browser.get(url, 5000);
  };
};
module.exports = ArticlePage;