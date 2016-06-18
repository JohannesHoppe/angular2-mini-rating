import { MiniRatingPage } from './app.po';

describe('mini-rating App', function() {
  let page: MiniRatingPage;

  beforeEach(() => {
    page = new MiniRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
