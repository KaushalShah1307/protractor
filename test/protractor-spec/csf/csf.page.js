var CSFPage = function() {
  this.get = function() {
  	console.log('getting csf');
    browser.get('/business-of-golf/');
    setTimeout(function() {console.log('wait')},5000)
  };
};
module.exports = CSFPage;