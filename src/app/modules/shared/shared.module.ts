import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SocialMediaLinksComponent } from './components/sm-links/sm-links.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

import { RestrictLengthPipe } from '../../pipes/restrict-length.pipe';
import { StripHtmlPipe} from '../../pipes/strip-html.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    SocialMediaLinksComponent,
    ComingSoonComponent,
    GoogleMapsComponent,
    RestrictLengthPipe,
    StripHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SocialMediaLinksComponent,
    ComingSoonComponent,
    GoogleMapsComponent,
    RestrictLengthPipe,
    StripHtmlPipe
  ]
})
export class SharedModule { }
