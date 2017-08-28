import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';

const landingRoutes: Routes = [
  { path: '', component: MainComponent, data: { breadcrumb: 'home' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule {}
