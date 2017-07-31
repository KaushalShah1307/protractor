describe('Dashboard', function() {
    
    var avatar = element(by.css('.avatar.avatar-icon'));
   
    it('should have user avatar', function() {
        expect(avatar.isDisplayed()).toBe(true);
        expect(avatar.getAttribute('style')).toContain('https://blogs-stage.forbes.com/qa/files/2017/07/King-of-Hell_avatar_1501255395-40x40.jpg');
    });
    
});