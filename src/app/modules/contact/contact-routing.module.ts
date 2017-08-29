import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' } }
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
