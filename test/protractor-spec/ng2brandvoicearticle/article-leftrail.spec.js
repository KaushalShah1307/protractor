describe('NG2 BrandVoice Article:', function() {
	describe('LeftRail', function() {
		var commentsPanel,
			commentsTrigger,
			loginButton;

		beforeAll(function() {
			commentsTrigger = $('.article-comments');
			commentsPanel = $('.article-sidebar-panel.article-comments-panel');
			loginButton = element(by.css('.login-text.fs-text-s'));
            leftRail = element.all(by.css('.trending-expanded.slotted-swimlaned')).get(0);
		});

		// (http://jira.forbes.com/browse/BUGREPORTING-1051)
		it('should have a login button', function() {
			expect(loginButton.isDisplayed()).toBe(true);
		});
        
        it('should have brandvoice styling on the title', function() {
            expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.fs-headline.fs-responsive-text>span'), ':after').getPropertyValue('color')")).toEqual('rgb(196, 26, 35)');
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
        
        // commenting this out for now as we are not changing the width of the left rail for slotted articles, for now. Uncomment this if functionality is re-introduced.
        /*it('should have smaller left rail', function() {
            expect(leftRail.isDisplayed()).toBe(true);
            expect(leftRail.getCssValue('width')).toEqual('250px');
        }); */
	});
});