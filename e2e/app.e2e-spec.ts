import { ITTrackerPage } from './app.po';

describe('it-tracker App', function() {
  let page: ITTrackerPage;

  beforeEach(() => {
    page = new ITTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
