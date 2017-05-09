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
            expect(element(by.id('_mN_dy_114441758')).isPresent()).toBe(true);      
        });

		// (http://jira.forbes.com/browse/BUGREPORTING-1051)
		it('should have a login button', function() {
			expect(loginButton.isDisplayed()).toBe(true);
		});

        it('should login', function() {
            element(by.className('utility-item-login')).click();
            element(by.name('user')).sendKeys('testguy');
            element(by.name('pass')).sendKeys('Forbes123\n');
            
            var loginModal = element(by.className('modal-close'));
            expect(loginModal).toBeTruthy();
        });        
	});
});