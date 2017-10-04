import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];
  private people_img_paths: string[] = ['wp-content/themes/angular/dist/assets/img/people1.png', 'wp-content/themes/angular/dist/assets/img/people2.png', 'wp-content/themes/angular/dist/assets/img/people3.png'];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [{ label: 'About', url: '/about' }];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
