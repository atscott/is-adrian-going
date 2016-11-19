import { IsAdrianGoingPage } from './app.po';

describe('is-adrian-going App', function() {
  let page: IsAdrianGoingPage;

  beforeEach(() => {
    page = new IsAdrianGoingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
