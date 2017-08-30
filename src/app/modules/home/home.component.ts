import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
