describe('csf -', function() {
  it('should not have 404 links', function() {
    browser.ignoreSynchronization = false;
    browser.get('/new-csf-1');
    globals.testAllLinks();
  });
});