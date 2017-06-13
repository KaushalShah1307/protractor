describe('NG2 Article:', function() {
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

        it('should login', function() {
            loginButton.click();
            element(by.name('user')).sendKeys('testguy');
            element(by.name('pass')).sendKeys('Forbes123\n');
            
            expect(element(by.css('.modal-dialog')).isDisplayed()).toBe(true);
            expect(element(by.css('.main')).getText()).toEqual('You have been logged into Forbes');
            var closeLoginModal = element.all(by.css('.icon.icon-close')).first();
            closeLoginModal.click();
            
            var logedInUser = element(by.css('.navbar-login>user-dropdown>a>h4'));
            expect(logedInUser.getText()).toEqual('My Guy');
        });
        
        it('should logout', function() {
            var logOut = element.all(by.css('.fs-text-xs>div>li>a')).get(4);
            logOut.click();
            expect(element(by.css('.login-text.fs-text-s')).getText()).toEqual('LOG IN');
        });
	});
});