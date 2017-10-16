import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleComponent } from './components/article/article.component';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: ArticleComponent }
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
