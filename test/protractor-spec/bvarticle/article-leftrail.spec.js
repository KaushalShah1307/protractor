describe('Article:', function() {
	describe('LeftRail', function() {
		var commentsPanel,
			commentsTrigger,
			loginButton;

		beforeAll(function() {
			commentsTrigger = $('.article-comments');
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');
			loginButton = $('.unireg_login_replacement');
		});
    
        it('should have the medianet unit', function() {
            expect(element(by.id('_mN_dy_688196485')).isPresent()).toBe(false);      
        });

		// (http://jira.forbes.com/browse/BUGREPORTING-1051)
		it('should have a login button', function() {
			expect(loginButton.isDisplayed()).toBe(true);
		});

        it('should have left rail with contents', function() {
            var leftRailContent = element(by.className('item post'));
            expect(leftRailContent.isPresent()).toBe(true);
        });

               
	});
});