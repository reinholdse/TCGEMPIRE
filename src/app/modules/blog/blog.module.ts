import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { SharedModule } from '../shared/shared.module';

import { BlogComponent } from './blog.component';
import { ArticleComponent } from './components/article/article.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
})
export class BlogModule { }
