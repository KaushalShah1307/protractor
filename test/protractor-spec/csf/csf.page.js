var CSFPage = function() {
  this.get = function() {
  	browser.ignoreSynchronization = false;
    browser.get('/business-of-golf/');
  };
};
module.exports = CSFPage;