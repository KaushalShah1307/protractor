var MediaManager = function() {
  this.get = function() {
    browser.get('/media-manager/#/');
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };    
};
    
module.exports = MediaManager;