describe('Image Search:', function() {
   
    it('should get the page', function() {
        element.all(by.css('.forbes-logo>a')).get(1).click(); 
    });
    
    it('should click to switch to images', function() {
        element(by.css('.switch-label.switch-label-on.not-active')).click(); 
    });
    
    it('should have image sources', function() {
        var imageSources = ['Getty', 'AP', 'Bloomberg', 'Shutterstock', 'Forbes'];
            for (i=0; i<5; i++) {
                expect(imageSources).toContain(element.all(by.css('.radio-wrapper>label')).get(i).getText());  
            }; 
    });
    
    it('should search for an image', function() {
        var searchBar = element(by.model('search_data.query'));
        searchBar.click(); 
        searchBar.sendKeys('Forbes/');
    });
    
});