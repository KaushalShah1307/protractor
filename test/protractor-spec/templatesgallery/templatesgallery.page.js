/**
 * Created by kshah on 5/13/2016.
 */
var TemplatesGallery = function() {
  this.get = function() {
    browser.get('/pictures/mli45fdllh/1-maria-sharapova/', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = TemplatesGallery;
