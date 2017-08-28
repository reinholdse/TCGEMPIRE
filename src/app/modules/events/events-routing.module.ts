import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';

const eventsRoutes: Routes = [
  { path: 'events', component: MainComponent, data: { breadcrumb: 'Events' } }
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
