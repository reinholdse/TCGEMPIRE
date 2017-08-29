import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleComponent } from './components/article/article.component';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent, data: { breadcrumb: 'Blog' } },
  { path: 'blog/:title', component: ArticleComponent, data: { breadcrumb: 'Article' } }
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
