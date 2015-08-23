var ArticlePage = function() {
  this.get = function() {
  	browser.ignoreSynchronization = false;
    browser.get('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/');
  };
};
module.exports = ArticlePage;