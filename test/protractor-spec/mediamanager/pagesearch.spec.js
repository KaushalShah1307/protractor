describe('Image Search:', function() {
    
    var sources = element.all(by.css('.radio-wrapper>label'));
    var search = element(by.css('.icon.icon-search'));
    var results = element(by.css('.section-title.num-of-results'));
   
    it('should get the page', function() {
        element.all(by.css('.forbes-logo>a')).get(1).click(); 
    });
    
    it('should click to switch to images', function() {
        element(by.css('.switch-label.switch-label-on.not-active')).click(); 
    });
    
    it('should have image sources', function() {
        var imageSources = ['Getty', 'AP', 'Bloomberg', 'Shutterstock', 'Forbes'];
            for (i=0; i<5; i++) {
                expect(imageSources).toContain(sources.get(i).getText());  
            }; 
    });
    
    it('should search for Getty images', function() {
        var searchBar = element(by.model('search_data.query'));
        searchBar.click(); 
        searchBar.sendKeys('Forbes');
        search.click();
        expect(results.getText()).toContain('images for “Forbes”');
    });
    
    it('should search for AP images', function() {
        sources.get(1).click();
        search.click();
        expect(results.getText()).toContain('images for “Forbes”');
    });
    
    it('should search for Bloomberg images', function() {
        sources.get(2).click();
        search.click();
        expect(results.getText()).toContain('images for “Forbes”');
    });
    
    it('should search for Shutterstock images', function() {
        sources.get(3).click();
        search.click();
        expect(results.getText()).toContain('images for “Forbes”');
    });
    
});