describe('NG2 BrandVoice Article:', function() {
	describe('LeftRail', function() {
		var commentsPanel,
			commentsTrigger,
			loginButton;

		beforeAll(function() {
			commentsTrigger = $('.article-comments');
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');
			loginButton = element(by.css('.login-text.fs-text-s'));
		});

		// (http://jira.forbes.com/browse/BUGREPORTING-1051)
		it('should have a login button', function() {
			expect(loginButton.isDisplayed()).toBe(true);
		});
        
        xit('should have brandvoice styling on the title', function() {
            expect(element.all(by.css('.fs-headline.fs-responsive-text>span', ':after')).first().getCssValue('color')).toEqual('#c41a23'); 
        });

        xit('should login', function() {
            element(by.className('utility-item-login')).click();
            element(by.name('user')).sendKeys('testguy');
            element(by.name('pass')).sendKeys('Forbes123\n');
            
            var loginModal = element(by.className('modal-close'));
            expect(loginModal).toBeTruthy();
        });        
	});
});