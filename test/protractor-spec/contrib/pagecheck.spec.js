describe('contribhp -', function() {
  it('should not have 404 links', function() {
    browser.ignoreSynchronization = false;
    browser.get('/sites/gordonkelly');
    globals.testAllLinks();
  });
});