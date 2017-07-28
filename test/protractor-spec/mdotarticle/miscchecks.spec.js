describe('Miscellaneous Checks:', function() {
   
    describe('Brightcove Videos:', function() {
       
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/zackomalleygreenburg/2015/02/05/red-baraat-live-from-the-forbes-newsroom/';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
    
        it('should have the brightcove videos', function() {
            expect(browser.executeScript('return window.Object.values(window.__INITIAL_STATE__.articles)[0].brightCoveVideos.length')).toBe(4);
        });
        
    });

    describe('Article Swipe - Vertical:', function() {
        
        var clickNext = element(by.css('.side-nav.btn-right.is-visible'));
       
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/gordonkelly/2017/06/22/iphone-8-display-native-resolution/';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        var firstArticleHeadline = 'iPhone 8 Leak Reveals A New Secret';
    
        it('should click for the next article', function() {
            browser.sleep(2000);
            clickNext.click();
        });
        
        it('should have the article headline', function() {
            browser.sleep(2000);
            expect(element.all(by.className('cover__preview__title')).get(1).getText()).not.toEqual(firstArticleHeadline); 
        });
        
    });
    
    describe('Author Info:', function() {
        
        var authorName = 'Gordon Kelly';
        var authorAvatar = 'https://secure.gravatar.com/avatar/135313297429b8a66b069508000b1134?s=136&d=mm&r=g';
        var authorRole = 'Contributor';
        var authorShortBio = "I write about technology's biggest companies";
        var recentItems = element.all(by.css('.contrib__recent-list>li>a'));
       
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/gordonkelly/2017/06/22/iphone-8-display-native-resolution/?s=iPhoneVsGalaxy';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should expand and reveal author information', function() {
            expect(element(by.css('.cover__byline')).isDisplayed()).toBe(true);
            element(by.css('.cover__byline')).click();
            expect(element(by.css('.contrib__biopic')).getAttribute('alt')).toEqual(authorName);
            expect(element(by.css('.contrib__biopic')).getAttribute('src')).toEqual(authorAvatar);
            expect(element(by.css('.contrib__byline-role')).getText()).toEqual(authorRole);
            //expect(element(by.css('.contrib__byline-shortbio')).getText()).toEqual(authorShortBio);
            expect(recentItems.length > 0);
            element(by.css('.modal__close')).click();
        });
        
    });
    
    xdescribe('Privacy/Terms/Hashtags:', function() {
        
        var streamName = element(by.css('.stream__name'));
        var contactUs = 'mailto:productfeedback@forbes.com';
        var privacy = '//www.forbes.com/fdc/privacy.html';
        var terms = '//www.forbes.com/terms';
        var adChoices = '//preferences-mgr.truste.com/?pid=forbes01';
        var legal = '© 2017 Forbes Media LLC. All Rights Reserved.';
        var streamHashtag = '#iPhoneVsGalaxy';
       
        it('should have Contact Us link', function() {
            streamName.click();
            expect(element(by.linkText('Contact Us')).getAttribute('href')).toEqual(contactUs);
        });
       
        it('should have Privacy link', function() {
            expect(element(by.linkText('Privacy')).getAttribute('href')).toContain(privacy);
        });
       
        it('should have Terms link', function() {
            expect(element(by.linkText('Terms')).getAttribute('href')).toContain(terms);
        });
       
        it('should have AdChoices link', function() {
            expect(element(by.linkText('AdChoices')).getAttribute('href')).toContain(adChoices);
        });
       
        it('should have legal blurb', function() {
            expect(element(by.css('.nav__legal')).getText()).toEqual(legal);
        });
       
        it('should have stream hashtag in list of hashtags', function() {
            expect(element(by.css('.nav__hashtag--item.nav__current--hashtag')).getText()).toEqual(streamHashtag);
            streamName.click();
        });
        
    });
    
    describe('Guest Contrib Block:', function() {
        
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/qa/2013/03/06/link-how-to-predict-managerial-success-4-key-qualities-to-consider-victor-lipman/?s=trending';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
    
        it('should click and expand the cover card', function() {
            element(by.className('cover__footer-scrim')).click();
            browser.sleep(1000).then(function() {
                expect(browser.getCurrentUrl()).toContain('?c=0');
            });
        });
    
        it('should have the guest contrib block', function() {
            expect(element(by.css('.guest-contrib')).isPresent()).toBe(true);
            expect(element(by.css('.intro')).getText()).toEqual('POST WRITTEN BY');
            expect(element(by.css('.info-block ')).getText().length > 0);
        });
                
    });
    
    describe('Hamburger/Nav:', function() {
        
        var hamburger = element(by.css('.ficon.ficon-hamburger'));
        var forbesLogo = element(by.css('.header__home'));
        var searchIcon = element(by.css('.inlineicon.inlineicon-search'));
        
        it('should get the page', function() {
            var url = 'https://m.forbes.com/sites/lizryan/2017/07/24/why-is-my-manager-suddenly-hostile-toward-me-heres-why/?a=a';
            browser.get(url);
            globals.pagesChecked.push(url);
        });
        
        it('should have hamburger', function() {
            expect(browser.isElementPresent(hamburger)).toBe(true);
            expect(hamburger.isDisplayed()).toBe(true);
        });
        
        it('should have Forbes homepage link/logo', function() {
            expect(forbesLogo.isDisplayed()).toBe(true);
            expect(forbesLogo.getAttribute('href')).toBe('https://www.forbes.com/?homepage');
        });
        
        it('should have search icon', function() {
            expect(searchIcon.isDisplayed()).toBe(true);
        });
        
        it('should click hamburger to reveal channel/section menu', function() {
            hamburger.click();
            expect(element(by.css('.nav')).isDisplayed()).toBe(true);
        });
        
        it('should have channels in the nav', function() {
            expect(element.all(by.css('.nav__menu--items>li')).count()).toBeGreaterThanOrEqual(18); 
        });
        
        it('should have sections in the nav', function() {
            expect(element.all(by.css('.nav__submenu--items>li')).count()).toBeGreaterThanOrEqual(168); 
        });
        
        it('should click channel to expand sections', function() {
            element.all(by.css('.nav__menu--items>li')).first().click();
            expect(element.all(by.css('.nav__submenu--items>li')).first().getText()).toEqual(element.all(by.css('.nav__submenu--item-link')).first().getText());
        });
        
        it('should close the nav', function() {
            element(by.css('.modal__close')).click(); 
        });
        
        it('should click to search content', function() {
            browser.sleep(1500);
            searchIcon.click();
            var searchInput = element(by.css('.search__input__box>input'));
            searchInput.click();
            searchInput.sendKeys('Lewis Dvorkin\n');
        });
        
        it('should have search results', function() {
            browser.sleep(1500);
            expect(element.all(by.css('.search__result__item')).count()).toBeGreaterThanOrEqual(10);
            var showMore = element(by.css('.search__more__results>a'));
            expect(showMore.getAttribute('href')).toEqual('https://www.forbes.com/search/?q=Lewis%20Dvorkin');
            element(by.css('.modal__close')).click();
        });
                
    });
    
});