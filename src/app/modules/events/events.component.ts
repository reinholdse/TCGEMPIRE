import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = [
      { label: 'Events', url: '/events' }
    ];
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
