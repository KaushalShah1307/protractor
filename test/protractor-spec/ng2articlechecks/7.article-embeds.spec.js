describe('Embeds:', function() {
        
    describe('Instagram:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/natalierobehmed/2015/09/17/inside-the-earnings-of-taylor-swifts-girl-gang/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have instagram embeds', function() {
            for(var i=0; i<6; i++) {
               var instaEmbeds = element(by.css("#instagram-embed-"+i+""));
               expect(browser.isElementPresent(instaEmbeds)).toBe(true); 
            };
        });
    });

    describe('Twitter:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/jerrybarca/2016/11/09/belichick-letter-to-trump-about-friendship-not-politics/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have twitter embeds', function() {
            for(var i=0; i<1; i++) {
               var twitterEmbeds = element(by.css("#twitter-widget-"+i+""));
               expect(browser.isElementPresent(twitterEmbeds)).toBe(true); 
            };
        });
    });

    describe('Vimeo:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/brucekasanoff/2016/05/20/the-1-secret-to-career-success/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have vimeo embeds', function() {
            var vimeoEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>span>iframe"));
            expect(vimeoEmbeds.getAttribute('src')).toEqual('https://player.vimeo.com/video/167292188?title=0&byline=0&portrait=0');
            expect(browser.isElementPresent(vimeoEmbeds)).toBe(true);
        });
    });

    describe('Soundcloud:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/ianaltman/2016/04/28/3-proven-ways-to-ensure-success-at-your-next-business-conference/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have soundcloud embeds', function() {
            var soundcloudEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
            expect(soundcloudEmbeds.getAttribute('src')).toEqual('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/260750925&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false');
            expect(browser.isElementPresent(soundcloudEmbeds)).toBe(true);
        });
    });

    describe('Apester:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/emilyinverso/2016/10/10/quiz-who-said-what-in-last-nights-debate/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have apester embeds', function() {
            var apesterEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
            expect(apesterEmbeds.getAttribute('src')).toEqual('https://renderer.qmerce.com/interaction/57fb9063605e06ce177ff792');
            expect(browser.isElementPresent(apesterEmbeds)).toBe(true);
        });
    });

    describe('JS Maps:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/williamnoglows/2015/06/29/on-tour-with-katy-perry/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have JS maps embeds', function() {
            var maps = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
            expect(maps.getAttribute('src')).toEqual('https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/4d47f43d6126f1807149ed1c60334b50/on-tour-with-katy-perry/index.html');
            expect(browser.isElementPresent(maps)).toBe(true);
        });
    });

    describe('Scribd:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/matthewherper/2016/07/08/theranos-defiantly-says-holmes-will-remain-ceo-but-it-may-stop-all-lab-operations/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have scribd embeds', function() {
            var scribdEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
            expect(scribdEmbeds.getAttribute('src')).toEqual('https://www.scribd.com/embeds/317818941/content?start_page=1&view_mode=scroll&access_key=key-26Hzw5EOAg42Pz78N8JD&show_recommendations=true&show_upsell=true');
            expect(browser.isElementPresent(scribdEmbeds)).toBe(true);
        });
    });

    describe('Libsyn:', function() {

        it('should get the page', function() {
            var url = 'https://www.forbes.com/sites/jacobmorgan/2016/06/27/marshall-goldsmith-on-how-to-drive-behavior-change/?view=prod';
            browser.get(url);
            globals.pagesChecked.push(url);
        });

        it('should have libsyn embeds', function() {
            var libsynEmbeds = element(by.css(".article-body.fs-article.fs-responsive-text>div>p>iframe"));
            expect(libsynEmbeds.getAttribute('src')).toEqual('https://html5-player.libsyn.com/embed/episode/id/4472425/height/300/width/640/theme/standard/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/direction/backward/no-cache/true/');
            expect(browser.isElementPresent(libsynEmbeds)).toBe(true);
        });
    });
    });