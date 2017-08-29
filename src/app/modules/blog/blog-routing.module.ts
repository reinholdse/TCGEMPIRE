import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { ListComponent } from './components/list/list.component';

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: MainComponent,
    data: { breadcrumb: 'Blog' },
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: ListComponent },
      { path: ':title', component: ArticleComponent, data: { breadcrumb: 'Article' } }
    ]
  }
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
