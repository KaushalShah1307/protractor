describe('Article', function() {
	describe('Sidebar-', function() {
		var commentsPanel,
			commentsTrigger;
		beforeEach(function() {
			commentsTrigger = $('.article-comments'),
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');
		});

		it('should open', function() {
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
		});
	});
});