var ContribPage = function() {
  this.get = function() {
  	console.log('getting contrib');
    browser.get('/sites/gordonkelly/',5000);
  };

  this.adsService = 'ContribAdService';
};
module.exports = ContribPage;