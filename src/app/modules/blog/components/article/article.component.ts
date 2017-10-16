import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Article, DummyDatabaseService } from '../../../../services/dummy-database.service';
import { Article, BlogApiService } from '../../../../services/blog-api.service';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];
  private article: Article;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private blogService: BlogApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' }
    ];
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getArticle(params.get('slug')))
      .subscribe(
        (article: Article) => {
          if (article) {
            this.breadcrumbs.push({ label: article.title.rendered, url: '/blog/' + article.slug });
            this.article = article;
          } else {
            this.router.navigate(["/page-not-found"]);
          }
        }
      );
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
