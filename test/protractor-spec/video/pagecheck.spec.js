var Video = require('./video.page.js'),
	video  = new Video();

beforeEach(function(){
    browser.ignoreSynchronization = true;
    // add the cookies here
});

describe('Video Home Page', function() {
    
	it('should get the page', function() {
		video.get();
	});
    
});