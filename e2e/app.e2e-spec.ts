import { DisplayDataAppPage } from './app.po';

describe('display-data-app App', () => {
  let page: DisplayDataAppPage;

  beforeEach(() => {
    page = new DisplayDataAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
