import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';

const aboutRoutes: Routes = [
  { path: 'about', component: MainComponent, data: { breadcrumb: 'About' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {}
