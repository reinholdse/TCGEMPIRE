import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';

const contactRoutes: Routes = [
  { path: 'contact', component: MainComponent, data: { breadcrumb: 'Contact' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
