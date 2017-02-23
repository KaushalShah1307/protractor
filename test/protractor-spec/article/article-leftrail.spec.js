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

/*		it('should open', function() {
			expect(commentsPanel.isDisplayed()).toBe(false);

			commentsTrigger.click();

			browser.sleep(2000);

			expect(commentsPanel.isDisplayed()).toBe(true);
		});

		it('should close', function() {
			expect(commentsPanel.isDisplayed()).toBe(true);

			commentsTrigger.click();

			browser.sleep(2000);

			expect(commentsPanel.isDisplayed()).toBe(false);
		}); */
	});
});