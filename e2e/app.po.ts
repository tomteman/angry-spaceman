export class AngrySpacemanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angry-spaceman-app h1')).getText();
  }
}
