var ContribPage = require('./contribhp.page.js');
describe('contribhp -', function() {
	var contribPage = new ContribPage();
	contribPage.get();
	globals.testAllLinks();
});