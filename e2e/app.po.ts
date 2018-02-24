import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBlockTitle() {
    return element(by.css('blockTitle')).getText();
  }

  getHomeText() {
    return element(by.css('home')).getText();
  }
}
