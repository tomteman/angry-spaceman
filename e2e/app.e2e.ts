import { AngrySpacemanPage } from './app.po';

describe('angry-spaceman App', function() {
  let page: AngrySpacemanPage;

  beforeEach(() => {
    page = new AngrySpacemanPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angry-spaceman works!');
  });
});
