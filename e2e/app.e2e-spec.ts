import { HellgasHomepagePage } from './app.po';

describe('hellgas-homepage App', () => {
  let page: HellgasHomepagePage;

  beforeEach(() => {
    page = new HellgasHomepagePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
