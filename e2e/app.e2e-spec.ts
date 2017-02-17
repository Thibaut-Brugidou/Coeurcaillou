import { CoeurcaillouPage } from './app.po';

describe('coeurcaillou App', () => {
  let page: CoeurcaillouPage;

  beforeEach(() => {
    page = new CoeurcaillouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
