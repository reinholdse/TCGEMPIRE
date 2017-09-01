import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { TheShopComponent } from './components/the-shop/the-shop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FindUsComponent } from './components/find-us/find-us.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import { PhoneEmailLinkComponent } from './components/phone-email-link/phone-email-link.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    TheShopComponent,
    AboutUsComponent,
    FindUsComponent,
    FollowUsComponent,
    PhoneEmailLinkComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
