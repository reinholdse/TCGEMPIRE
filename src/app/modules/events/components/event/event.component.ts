import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Event, DummyDatabaseService } from '../../../../services/dummy-database.service';
import { Breadcrumb, BreadcrumbService } from '../../../../services/breadcrumb.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'events-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private databaseService: DummyDatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [
      { label: 'Events', url: '/events' }
    ];
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.databaseService.getEvent(+params.get('id')))
      .subscribe((event: Event) => {
        if (!event)
          this.router.navigate(["/page-not-found"]);
        else
          this.breadcrumbs.push({ label: event.title, url: '/events/' + event.id });
      });
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);
  }
}
