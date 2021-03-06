import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleComponent } from './components/article/article.component';
import { EditorComponent } from './components/editor/editor.component';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/editor', component: EditorComponent },
  { path: 'blog/:id', component: ArticleComponent }
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
