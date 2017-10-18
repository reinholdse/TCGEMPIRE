import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';
import { Article, BlogApiService } from '../../services/blog-api.service';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  private breadcrumbs: Breadcrumb[];
  private articles: Article[];
  private articlesSub: Subscription;

  constructor(private breadcrumbService: BreadcrumbService,
              private blogApiService: BlogApiService) {
    this.breadcrumbs = [{ label: 'Blog', url: '/blog' }]
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
    this.articlesSub = this.blogApiService.getArticles()
      .subscribe(
        (articles: Article[]) => this.articles = articles,
        (error: any) => console.log('Ostrich went wrong here!') // Ostrich method!
      );
  }

  ngOnDestroy() {
    this.articlesSub.unsubscribe();
  }

}
