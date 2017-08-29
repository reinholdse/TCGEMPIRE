import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    MainComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
})
export class BlogModule { }
