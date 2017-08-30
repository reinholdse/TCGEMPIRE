import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { SharedModule } from '../shared/shared.module';

import { EventsComponent } from './events.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
