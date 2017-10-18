import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Article, BlogApiService } from '../../../../services/blog-api.service';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit, OnDestroy {
  private breadcrumbs: Breadcrumb[];
  private article: Article;
  private articleSub: Subscription;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private blogApiService: BlogApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' }
    ];
  }

  ngOnInit() {
    this.articleSub = this.route.paramMap
      .switchMap((params: ParamMap) => this.blogApiService.getArticleBySlug(params.get('slug')))
      .subscribe(
        (article: Article) => {
          if (article) {
            this.breadcrumbs.push({ label: article.title, url: '/blog/' + article.slug });
            this.article = article;
          } else {
            this.router.navigate(["/page-not-found"]);
          }
        },
        ((error: any) => this.router.navigate(["/page-not-found"]))
      );
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }
}
