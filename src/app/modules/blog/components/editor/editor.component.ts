import { Component, OnInit } from '@angular/core';
import { Article, DummyDatabaseService } from '../../../../services/dummy-database.service';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'blog-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private databaseService: DummyDatabaseService
  ) {
    this.breadcrumbs = [
      { label: 'Blog', url: '/blog' },
      { label: 'Editor', url: '/blog/editor' }
    ];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
