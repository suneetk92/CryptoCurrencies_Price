import { browser, by, element } from 'protractor';

export class CryptoPage {
  navigateTo() {
    return browser.get('/');
  }

  getText() {
    return 'Hello';
  }
}
