var ArticlePage = require('./article.page.js'),
	articlePage = new ArticlePage();

describe('NG2 Article Checks:', function() {
    
    describe('Editors Pick:', function() {

        it('should get the page', function() {
            articlePage.get();
        });
        
        it('should have the editors pick badge', function() {
            expect(element(by.css('.editors-pick')).isPresent()).toBe(false); 
        });

        it('should have the medianet unit', function() {
            expect(element(by.id('_mN_dy_289199738')).isPresent()).toBe(true);      
        });

        it('should have the revcontent unit', function() {
            expect(element.all(by.className('rc-w-30022 rc-p rc-p-pt')).first().isPresent()).toBe(true); 
        });

        globals.generalCheck();
        //globals.checkAds(articlePage.adsService);
        
    });
});