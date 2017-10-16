import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

export interface OldArticle {
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  author: number,
  id: number,
  slug: string
}

export interface Article {
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  author: string,
  date: Date
}

@Injectable()
export class BlogApiService {
  private api_uri: string = environment.apiURI;

  constructor(private http: Http) { }

  public getArticleBySlug(slug: string): Observable<Article> {
    return this.http.get(this.api_uri + '?slug=' + slug)
      .map((res: Response) => this.extractArticles(res.json())[0])
      .catch((error: any) => Observable.throw('Error in BlogApiService:getArticleBySlug'));
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get(this.api_uri)
      .map((res: Response) => this.extractArticles(res.json()))
      .catch((error: any) => Observable.throw('Error in BlogApiService:getArticles'));
  }

  private extractArticles(wpArticles): Article[] {
    let articles: Article[] = [];
    for (let wpArticle of wpArticles) {
      let article : Article = {
        id: wpArticle.id,
        slug: wpArticle.slug,
        title: wpArticle.title.rendered,
        excerpt: wpArticle.excerpt.rendered,
        content: wpArticle.content.rendered,
        author: '',
        date: new Date(wpArticle.date)
      };
      this.http.get(wpArticle._links.author[0].href)
        .map((res: Response) => res.json())
        .subscribe((author) => article.author = author.name);
      articles.push(article);
    }
    return articles;
  }

}
