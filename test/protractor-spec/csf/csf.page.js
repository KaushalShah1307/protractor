var CSFPage = function() {
  this.get = function() {
  	console.log('getting csf');
    browser.get('/business-of-golf/');
  };
};
module.exports = CSFPage;