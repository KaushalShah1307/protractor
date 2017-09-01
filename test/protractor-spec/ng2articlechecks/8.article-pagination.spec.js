describe('Article Pagination:', function() {
      
    it('should get the page', function() {
        var url = 'https://www.forbes.com/sites/qa/2014/03/26/link-building-mobile-apps-with-angular-and-trigger-io/?view=prod';
        browser.get(url);
        globals.pagesChecked.push(url);
    });

    xit('should not have black border on hover state for continue button', function() {
        expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.next'), ':hover').getPropertyValue('border-color')")).toEqual('rgb(6, 158, 236)');
        expect(browser.executeScript("return window.getComputedStyle(document.querySelector('.next'), ':hover').getPropertyValue('background')")).toEqual('rgb(6, 158, 236)');
    });

    it('should load the paginated page', function() {
        var nextPage = element.all(by.className('next')).first();
        nextPage.click();
        expect(browser.getCurrentUrl()).toContain('/2/');
    });

    it('should have the continued from indication', function() {
        expect(element(by.css('.fs-article>p')).isPresent()).toBe(true); 
    });

    describe('Paginated Page Tracking:', function() {

        describe('Google Analytics', function() {
            
            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].author')).toEqual('Kaushal Shah');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].DFPLineItemID')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].DFPSite')).toEqual('fdc.forbes');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].DFPZone')).toEqual('article-d');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].blogType')).toEqual('group');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].brandVoice')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].brandVoiceLive')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].bvContantSource')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].bvLeftRailHeadline')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].bvProgramType')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].categories')).toEqual('Business');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].contentTitle')).toEqual('Link: Building mobile & apps with Angular & Trigger.IO');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].contrbActive')).toEqual('false');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].contribDivision')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].contribType')).toEqual('Contributor Group');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].date')).toEqual('2014-03-26T21:30:00.000Z');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].doNotPaginate')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].edit')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].forbesOnTrump')).toEqual('false');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].hashtags')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].heroImage')).toEqual('false');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].imageCount')).toEqual('19');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].leftRail')).toEqual('true');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].naturalID')).toEqual('blogAndPostId/blog/post/1553-1683');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].pageNumber')).toEqual('2');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].pageTotal')).toEqual('5');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].pageType')).toEqual('blogslide:gallery');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].paragraphs')).toEqual('39');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].primaryChannel')).toEqual('Tech');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].primarySection')).toEqual('Transformational Tech');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].published')).toEqual('2014-03-26');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].referrer')).toEqual('https://www.forbes.com/sites/qa/2014/03/26/link-building-mobile-apps-with-angular-and-trigger-io/');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].section')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].site')).toEqual('qa');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].slot')).toEqual('none');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].videoPlacement')).toEqual('bottom');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].tags[0]')).toEqual('site::qa');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].tags[1]')).toEqual('slot::');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].tags[2]')).toEqual('type::article');   
                expect(browser.executeScript('return window.trackingService.trackingCalls[1]["googleAnalytics"].trendingHahtags')).toEqual('none');   
            });
          });

        describe('SimpleReach', function() {

            it('should pass the right custom parameters', function() {
                expect(browser.executeScript('return window.__reach_config.authors;')).toEqual('Kaushal Shah'); 
                expect(browser.executeScript('return window.__reach_config.channels;')).toEqual('Technology'); 
                expect(browser.executeScript('return window.__reach_config.date;')).toEqual('2014-03-26T21:30:00.000Z'); 
                expect(browser.executeScript('return window.__reach_config.pid;')).toEqual('50e4a8434240cf5c4b000009'); 
                expect(browser.executeScript('return window.__reach_config.tags.length;')).toEqual(3); 
                expect(browser.executeScript('return window.__reach_config.title;')).toEqual('Link: Building mobile & apps with Angular & Trigger.IO'); 
            });

        });

     });
     });