import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { EventsComponent } from './events.component';
import { EventComponent } from './components/event/event.component';

const eventsRoutes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventComponent }
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
