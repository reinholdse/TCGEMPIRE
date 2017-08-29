import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { EventsComponent } from './events.component';

const eventsRoutes: Routes = [
  { path: 'events', component: EventsComponent, data: { breadcrumb: 'Events' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(eventsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventsRoutingModule {}
