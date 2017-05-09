describe('List Profile Page:', function() {
	var currentUrl;

	beforeAll(function(done) {
		browser.getCurrentUrl().then(function(url) {
			currentUrl = url;
			done();
		});
	});

	describe('Tracking on Profile Page:', function() {
		xdescribe('Fast Pixel', function() {
			var trackingPixel;

			beforeAll(function(done) {
				trackingPixel = $('img[src*="fast.forbes.com"]');
				trackingPixel.getAttribute('src').then(function(src) {
					trackingPixel.srcString = src;
					done();
				});
			});

			xit ('should have the correct parameters', function() {
				expect(globals.getParam(trackingPixel.srcString, 'su')).toEqual('https://www-staging.forbes.com/profile/bill-gates/');
				expect(globals.getParam(trackingPixel.srcString, 'au')).toEqual('undefined');
				expect(globals.getParam(trackingPixel.srcString, 'ch')).toEqual('lists');
				expect(globals.getParam(trackingPixel.srcString, 'se')).toEqual('billionaires');
			});
		});

		describe('Google Analytics', function() {
			var dataLayer;
			beforeAll(function() {
				browser.executeScript(function() {
					return dataLayer[0];
				}).then(function(result) {
					dataLayer = result;
				});
			});

			it('should pass the right custom parameters', function() {
				expect(dataLayer.DFPZone).toEqual('profile');
				expect(dataLayer.author).toEqual('none');
				expect(dataLayer.blogType).toEqual('none');
				expect(dataLayer.brandVoice).toEqual('none');
				expect(dataLayer.bvProgramType).toEqual('none');
				expect(dataLayer.edit).toContain('billionaires-');
				expect(dataLayer.channel).toEqual('lists');
                expect(dataLayer.section).toEqual('billionaires');
                expect(dataLayer.slot).toEqual('none');			
			});
		});
        
        describe('Comscore', function() {
            var comscorepixel;
            
            beforeAll(function(done) {
                comscorepixel = $('script[src*="b.scorecardresearch.com/beacon.js"]');
                comscorepixel.getAttribute('src').then(function(src) {
                    comscorepixel.srcString = src;
                    done();
                });      
            });
            
            it('should load the ComScore script', function() {
                expect(comscorepixel.length > 1);
            });
        });
        
	});
});
