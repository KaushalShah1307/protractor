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

        xit('should login', function() {
            loginButton.click();
            element(by.name('user')).sendKeys('testguy');
            element(by.name('pass')).sendKeys('Forbes123\n');
            
            var logedInUser = element(by.css('.user-name-item.fs-headline>a>h4'));
            expect(logedInUser.getText()).toEqual('My Guy');
        });
        
        xit('should logout', function() {
            var logOut = element.all(by.css('.fs-text-xxs>li>a')).get(6);
            logOut.click();
            expect(element(by.css('.navbar-login>login-form>header>h2')).getText()).toEqual('Log in');
            loginButton.click();
        });
        
        it('should have smaller left rail', function() {
            expect(leftRail.isDisplayed()).toBe(true);
            expect(leftRail.getCssValue('width')).toEqual('250px');
        });
	});
});