var ArticlePage = function() {
  this.get = function() {
  	console.log('getting article');
    browser.get('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/',5000);
    setTimeout(function() {},5000)
  };
};
module.exports = ArticlePage;