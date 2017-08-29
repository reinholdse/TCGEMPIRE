import { Injectable } from '@angular/core';

export interface Article {
  title: string,
  id: number
}

@Injectable()
export class DatabaseService {
  private articles: Article[];

  constructor() {
    this.articles = [
      {title: 'Hoo', id: 0},
      {title: 'Boo', id: 1},
      {title: 'Fuu', id: 2},
      {title: 'Foo', id: 3}
    ];
  }

  public getArticle(id: number): Promise<Article> {
    return Promise.resolve(this.articles[id]);
  }
}
