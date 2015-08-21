describe('article -', function() {
  it('should not have 404 links', function() {
    browser.ignoreSynchronization = false;
    browser.get('/sites/gordonkelly/2015/08/08/windows-10-forced-updates-causing-endless-crash-loop/?view=gap');
    globals.testAllLinks();
  });
});