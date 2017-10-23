import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SocialMediaLinksComponent } from './components/sm-links/sm-links.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { MasterballComponent } from './components/masterball/masterball.component';
import { MasterballGrayscaleComponent } from './components/masterball-grayscale/masterball-grayscale.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

import { RestrictLengthPipe } from '../../pipes/restrict-length.pipe';
import { StripHtmlPipe} from '../../pipes/strip-html.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    SocialMediaLinksComponent,
    ComingSoonComponent,
    GoogleMapsComponent,
    MasterballComponent,
    MasterballGrayscaleComponent,
    LoadingBarComponent,
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
    MasterballComponent,
    MasterballGrayscaleComponent,
    LoadingBarComponent,
    RestrictLengthPipe,
    StripHtmlPipe
  ]
})
export class SharedModule { }
