var CSFPage = function() {
  this.get = function() {
    browser.get('/next-billion-dollar-startups/');
  };

  this.adsService = 'CsfAdService';
};
module.exports = CSFPage;