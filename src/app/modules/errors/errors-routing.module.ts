import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './components/not-found/not-found.component';

const errorsRoutes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorsRoutingModule {}
