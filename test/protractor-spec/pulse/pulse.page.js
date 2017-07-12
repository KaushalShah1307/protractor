var Pulse = function() {
  this.get = function() {
    browser.get('/colehaan/daring-to-step-forward/');
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
   this.adsService = 'CsfAdService';    
};
    
module.exports = Pulse;