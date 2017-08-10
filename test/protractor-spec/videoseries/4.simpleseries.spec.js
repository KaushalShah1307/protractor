var SimpleSeries = require('./series.page.js'),
	simpleSeries = new SimpleSeries();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

describe('Simple Series Playlist:', function() {
    
    it('get the page', function() {
       simpleSeries.get(); 
    });
    
    
    //globals.generalCheck();
    
});