import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }

}
