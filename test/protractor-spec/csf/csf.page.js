var CSFPage = function() {
  this.get = function() {
  	console.log('getting csf');
    browser.get('/next-billion-dollar-startups/');
  };

  this.adsService = 'CsfAdService';
};
module.exports = CSFPage;