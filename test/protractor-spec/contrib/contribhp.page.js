var ContribPage = function() {
  this.get = function() {
  	browser.ignoreSynchronization = false;
    browser.get('/sites/gordonkelly/');
  };
};
module.exports = ContribPage;