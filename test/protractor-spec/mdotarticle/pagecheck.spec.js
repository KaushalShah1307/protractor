var MobileDotArticle = require('./mdotarticle.page.js'),
	mobileDotArticle = new MobileDotArticle();

beforeEach(function(){
    browser.ignoreSynchronization = true;
});

describe('Mobile Article (MDot):', function() {

	it('should get the page', function() {
		mobileDotArticle.get();
	});
    
    it('should click and expand the cover card', function() {
        element(by.className('cover__footer-scrim')).click();
        browser.sleep(1000).then(function() {
            expect(element(by.className('footer__progress')).getText()).toEqual('1 of 15');
            expect(browser.getCurrentUrl()).toContain('?c=0');
        });
    });
    
    xit('should swipe to show next card', function() {
        var card = element(by.className('pan__container '));

        browser.actions()
          .mouseMove(card, {x: 100, y: 100})
          .mouseDown()
          .mouseMove({x: 0, y: -400})
          .perform();

        browser.sleep(500);

        browser.actions()
          .mouseUp()
          .perform(); 
    });
    
});