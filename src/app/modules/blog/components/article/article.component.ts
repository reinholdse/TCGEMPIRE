import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article, DatabaseService } from '../../../../services/database.service';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' }
    ];
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.databaseService.getArticle(+params.get('id')))
      .subscribe((article: Article) => this.breadcrumbs.push({ label: article.title, url: '/blog/' + article.id }));
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
