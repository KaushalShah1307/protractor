describe('Dashboard:', function() {
    
    var avatar = element(by.css('.avatar.avatar-icon'));
    
    it('should have user avatar', function() {
        expect(avatar.isDisplayed()).toBe(true);
        expect(avatar.getAttribute('style')).toContain('https://blogs-stage.forbes.com/qa/files/2017/07/King-of-Hell_avatar_1501255395-40x40.jpg');
    });
    
    it('should have compose button', function() {
        var composeButton = element(by.css('.button-new'));
        expect(composeButton.isDisplayed()).toBe(true); 
    });
    
    it('should have hamburger menu', function() {
        var hamburger = element(by.css('.icon.icon-hamburger.menu-icon'));
        var menuItems = element.all(by.css('.fp-dropdown.open>ul>li'));
        hamburger.click();
        expect(menuItems.first().isPresent()).toBe(true);
        expect(menuItems.first().getText()).toEqual('Dashboard');
        hamburger.click();
    });
    
    it('should have footer', function() {
        var footer = element(by.css('.copyright'));
        expect(footer.getText()).toEqual('©2017 Forbes.com LLC. All Rights Reserved.');
    });
    
});

describe('Recent Stories:', function() {
    var storiesTitle = element.all(by.css('.all>ul>li>a .title.truncate'));
    var publishStatus = element.all(by.css('.all>ul>li .publish-status'));
    var lastModified = element.all(by.css('.all>ul>li .last-published'));
    var storyStatus = ['Draft', 'Published'];
    
    it('should have recent stories', function() {
        
        for(var i = 0; i < 2; i++) {
            expect(storiesTitle.get(i).isDisplayed()).toBe(true); 
            expect(publishStatus.get(i).isDisplayed()).toBe(true);
            expect(storyStatus).toContain(publishStatus.get(i).getText());
            expect(lastModified.get(i).isDisplayed()).toBe(true); 
        };
    });
    
});