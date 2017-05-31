/**
 * Created by kshah on 5/31/2016.
 */
var WelcomeAd = function() {
  this.get = function() {
    browser.get('/forbes/welcome/?autoforward=false', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = WelcomeAd;
