import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShopInfoComponent } from './components/shop-info/shop-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ShopInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
