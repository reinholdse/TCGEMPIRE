import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SocialMediaLinksComponent } from './components/sm-links/sm-links.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    LoaderComponent,
    SocialMediaLinksComponent,
    ComingSoonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SocialMediaLinksComponent,
    ComingSoonComponent
  ]
})
export class SharedModule { }
