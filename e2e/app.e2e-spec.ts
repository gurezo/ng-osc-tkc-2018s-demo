import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-osc-tkc2018s-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  browser.manage().window().setSize(1920, 1080);
  browser.ignoreSynchronization = true;
  let cnt = 0;
  for (let i = 0; i < 500; i++) {
    it('should display ashiras HP', () => {
      browser.get('http://ashiras.xyz/');
      browser.waitForAngular();
      browser.sleep(2000);
    });
    it('should display angular.io', () => {
      browser.get('https://angular.io/');
      browser.waitForAngular();
      browser.sleep(2000);
    });
    it('should display Open Source Conference Tokyo 2018 spring', () => {
      browser.get('https://www.ospn.jp/osc2018-spring/');
      browser.waitForAngular();
      browser.sleep(2000);
    });
    cnt++;
    console.log('cnt = ' + cnt);
    browser.waitForAngular();
  }
});
