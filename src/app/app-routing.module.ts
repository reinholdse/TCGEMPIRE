import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent, data: { breadcrumb: 'home' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
