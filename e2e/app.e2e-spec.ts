import {CryptoPage} from './app.po';

describe('crypto App', () => {
  let page: CryptoPage;

  beforeEach(() => {
    page = new CryptoPage();
  });

  it('should have title', () => {
    page.navigateTo();
    expect(page.getText()).toEqual('Hello');
  });
});
