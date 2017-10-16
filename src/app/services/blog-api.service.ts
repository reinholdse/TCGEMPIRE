import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

export interface Article {
  title: {
    rendered: string
  }
  id: number,
  slug: string
}

@Injectable()
export class BlogApiService {
  private api_uri: string = environment.apiURI;

  constructor(private http: Http) { }

  public getArticle(slug: string): Observable<Article> {
    return this.http.get(this.api_uri + '?slug=' + slug)
      .map((res: Response) => res.json()[0])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
