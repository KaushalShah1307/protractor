describe('Brandvoice Redirects:', function() {
    
    var unicef = 'https://www.forbes.com/sites/unicefusa/2017/06/11/6-ways-the-fight-against-polio-is-transforming-global-health/';
    var gradsOfLife = 'https://www.forbes.com/sites/gradsoflife/2017/07/26/do-investments-in-career-readiness-really-pay/';
    var socialImpact = 'https://www.forbes.com/sites/socialimpact/2017/06/22/how-reducing-food-waste-and-launching-innovative-strategies-will-help-us-end-hunger/';
    var civicNation = 'https://www.forbes.com/sites/civicnation/2017/06/21/challenging-campuses-to-go-all-in-on-conversation/';
    
    it('Unicef', function() {
        browser.get(unicef);
        globals.pagesChecked.push(unicef);
        var expectedUrl = browser.getCurrentUrl();
        expect(expectedUrl).toContain('https://m.forbes.com');
    });
    
    it('Grads Of Life', function() {
        browser.get(gradsOfLife);
        globals.pagesChecked.push(gradsOfLife);
        var expectedUrl = browser.getCurrentUrl();
        expect(expectedUrl).toContain('https://m.forbes.com');
    });
    
    it('Social Impact', function() {
        browser.get(socialImpact);
        globals.pagesChecked.push(socialImpact);
        var expectedUrl = browser.getCurrentUrl();
        expect(expectedUrl).toContain('https://m.forbes.com');
    });
    
    it('Civic Nation', function() {
        browser.get(civicNation);
        globals.pagesChecked.push(civicNation);
        var expectedUrl = browser.getCurrentUrl();
        expect(expectedUrl).toContain('https://m.forbes.com');
    }); 
    
});