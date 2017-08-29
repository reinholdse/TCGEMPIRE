import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';

const blogRoutes: Routes = [
  { path: 'blog', component: MainComponent, data: { breadcrumb: 'Blog' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {}
