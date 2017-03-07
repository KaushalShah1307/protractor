describe('Article', function() {
	describe('LeftRail', function() {
		var commentsPanel,
			commentsTrigger,
			loginButton;

		beforeAll(function() {
			commentsTrigger = $('.article-comments');
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');
			loginButton = $('.unireg_login_replacement');
		});

		// (http://jira.forbes.com/browse/BUGREPORTING-1051)
		it('should have a login button', function() {
			expect(loginButton.isDisplayed()).toBe(true);
		});

        it('should login', function() {
            element(by.className('utility-item-login')).click();
            element(by.name('user')).sendKeys('testguy');
            element(by.name('pass')).sendKeys('Forbes123\n');
            
            element(by.className('modal-close')).click();
            element(by.className('utility-item-login')).click();
            expect(element(by.className('user-links-item')).getText()).toEqual('My Guy');

            //expect(element(by.className('login-success')).getText().toEqual('Logged In'));
        });        
	});
});