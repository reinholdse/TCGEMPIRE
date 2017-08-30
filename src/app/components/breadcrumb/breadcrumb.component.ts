import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.breadcrumbService.getObservable().subscribe((updatedBreadcrumbs: Breadcrumb[]) => {
      if (updatedBreadcrumbs)
        this.breadcrumbs = updatedBreadcrumbs;
    });
  }

  public showBrand() {
    return (this.breadcrumbs.length === 0 || window.innerWidth < 768);
  }
}
