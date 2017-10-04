import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];
  private map_img_path: string = 'wp-content/themes/angular/dist/assets/img/location-map.png';

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [
      { label: 'Contact', url: '/contact' }
    ];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
