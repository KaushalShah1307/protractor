var ForbesPress = function() {
  this.get = function() {
    //browser.get('/forbespress', 5000);
    browser.get('https://www-staging.forbes.com/forbespress/#/dashboard', 5000);
    browser.ignoreSynchronization = true;
  };
};
module.exports = ForbesPress;