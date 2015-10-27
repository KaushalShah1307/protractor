describe('Article', function() {
	describe('Trending', function() {
		var trending_section;

		beforeAll(function() {
			trending_section = $('.article-stream-padding');
		});

		it('should be present on the page', function() {
			expect(trending_section).toBeDefined();
		});
	});
});