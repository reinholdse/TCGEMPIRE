import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Article, DummyDatabaseService } from '../../../../services/dummy-database.service';
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
    private databaseService: DummyDatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' }
    ];
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.databaseService.getArticle(+params.get('id')))
      .subscribe((article: Article) => {
        if (!article)
          this.router.navigate(["/page-not-found"]);
        else
          this.breadcrumbs.push({ label: article.title, url: '/blog/' + article.id })
      });
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
