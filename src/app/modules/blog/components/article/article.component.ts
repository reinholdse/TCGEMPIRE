import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

@Component({
  selector: 'blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' }
    ];
  }

  ngOnInit() {
    this.route.paramMap
//      .switchMap((params: ParamMap) => params.get('title')
      .subscribe((params: ParamMap) => {
        this.breadcrumbs.push({ label: params.get('title'), url: '/blog/' + params.get('title') });
      });
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
