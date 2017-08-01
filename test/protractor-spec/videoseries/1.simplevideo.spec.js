var SimpleVideo = require('./video.page.js'),
	simpleVideo = new SimpleVideo();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.executeScript('window.localStorage.clear();');
});

describe('Simple Video Homepage:', function() {
    
   it('get the page', function() {
      simpleVideo.get(); 
   }); 
    
});