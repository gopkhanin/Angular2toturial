import { Kt001Page } from './app.po';

describe('kt001 App', () => {
  let page: Kt001Page;

  beforeEach(() => {
    page = new Kt001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
