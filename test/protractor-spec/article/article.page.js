var ArticlePage = function() {
  this.get = function() {
  	browser.ignoreSynchronization = false;
  	var start = new Date();
    browser.get('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/');
    var end = new Date();
    var pageLoadTime = end-start;
    console.log(pageLoadTime);
  };
};
module.exports = ArticlePage;