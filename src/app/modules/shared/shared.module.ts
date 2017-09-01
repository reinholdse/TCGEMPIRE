import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SocialMediaLinksComponent } from './components/sm-links/sm-links.component';

@NgModule({
  declarations: [
    LoaderComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SocialMediaLinksComponent
  ]
})
export class SharedModule { }
