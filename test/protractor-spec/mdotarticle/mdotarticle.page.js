var MobileDotArticle = function() {
  this.get = function() {
    browser.get('https://m-dev.forbes.com/sites/datadesign/2017/01/03/a-day-in-the-life-of-a-forbes-under-30-how-young-innovators-stay-balanced-focused-and-connected/?s=Under30', 5000);
    browser.ignoreSynchronization = true;
    browser.getCurrentUrl().then(function(url) {
		browser.current_url = url;
        globals.pagesChecked.push(url);
    });
  };
};

module.exports = MobileDotArticle;