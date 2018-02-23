import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-osc-tkc2018s-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.manage().window().setSize(1920, 1080);
    browser.sleep(10000);
    expect(page.getParagraphText()).toEqual('Welcome to app!');
    for (let i = 0; i < 1000; i++ ) {
      browser.sleep(10000);
      browser.get('http://ashiras.xyz/');
      browser.sleep(10000);
      browser.get('https://angular.io/');
      browser.sleep(10000);
      browser.get('https://www.ospn.jp/osc2018-spring/');
      browser.sleep(10000);
    }
  });
});
