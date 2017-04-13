var ListProfiles = require('./profiles.page.js'),
	listProfiles  = new ListProfiles();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('List Profile Page', function() {
    
	it('should get the page', function() {
		listProfiles.get();
	});
    
});