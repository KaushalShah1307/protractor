var MediaManager = require('./mediamanager.page.js'),
	mediamanager = new MediaManager();

describe('Media Manager:', function() {
    
	it('should get the page', function() {
        mediamanager.get();
    });   
});