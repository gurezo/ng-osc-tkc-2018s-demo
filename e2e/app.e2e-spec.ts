import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-osc-tkc2018s-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  for (let i = 0; i < 100; i++) {
    it('should display welcome message', () => {
      if (i === 0) {
        page.navigateTo();
        browser.manage().window().setSize(1920, 1400);
        browser.sleep(2000);
        expect(page.getParagraphText()).toEqual('Welcome to app!');
        browser.ignoreSynchronization = true;
      }
      browser.sleep(2000);
      browser.get('http://ashiras.xyz/');
      browser.sleep(2000);
      browser.get('https://angular.io/');
      browser.sleep(2000);
      browser.get('https://www.ospn.jp/osc2018-spring/');
      browser.sleep(2000);
    });
    }
});
