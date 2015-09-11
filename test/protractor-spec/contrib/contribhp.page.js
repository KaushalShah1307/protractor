var ContribPage = function() {
  this.get = function() {
    browser.get('/sites/gordonkelly/',5000);
  };

  this.adsService = 'ContribAdService';
};
module.exports = ContribPage;