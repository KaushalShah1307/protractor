describe('Dashboard', function() {
    
    var avatar = element(by.css('.avatar.avatar-icon'));
    
    it('should be user dashboard', function() {
        expect(element(by.css('.location')).getText()).toEqual('ACCOUNT DASHBOARD'); 
    });
   
    it('should have user avatar', function() {
        expect(avatar.isDisplayed()).toBe(true);
        expect(avatar.getAttribute('style')).toContain('https://blogs-stage.forbes.com/qa/files/2017/07/King-of-Hell_avatar_1501255395-40x40.jpg');
    });
    
});

describe('Recent Stories', function() {
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
   
    it('should have title of the story', function() {
        expect(element.all(by.css('.title.truncate')).get(1).getText()).toEqual('This is the first Bertie post written by Crowley'); 
    });
    
});