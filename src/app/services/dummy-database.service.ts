import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export interface Article {
  title: string,
  id: number
}

export interface Event {
  title: string,
  id: number
}

@Injectable()
export class DummyDatabaseService {
  private articles: Article[];
  private events: Event[];

  constructor() {
    this.articles = [
      { title: 'Hoo', id: 0 },
      { title: 'Boo', id: 1 },
      { title: 'Fuu', id: 2 },
      { title: 'Foo', id: 3 }
    ];

    this.events = [
      { title: 'Blgith Tournament', id: 0 },
      { title: 'Xerxes Birthday', id: 1 },
      { title: 'Franky Tournament', id: 2 },
      { title: 'Bubu Birthday', id: 3 }
    ];
  }

  public getArticle(id: number): Promise<Article> {
    return Promise.resolve(this.articles[id]);
  }

  public getEvent(id: number): Promise<Event> {
    return Promise.resolve(this.events[id]);
  }
}
