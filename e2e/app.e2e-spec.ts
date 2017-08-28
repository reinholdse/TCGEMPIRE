import { TcgEmpirePage } from './app.po';

describe('tcg-empire App', function() {
  let page: TcgEmpirePage;

  beforeEach(() => {
    page = new TcgEmpirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
