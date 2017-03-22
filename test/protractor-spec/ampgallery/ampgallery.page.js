var AMPGallery = function() {
  this.get = function() {
    //browser.get('/forbespress', 5000);
    browser.get('/pictures/mli45fdllh/the-worlds-highest-paid/amp/', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = AMPGallery;