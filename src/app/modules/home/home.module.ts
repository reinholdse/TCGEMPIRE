import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShopInfoComponent } from './components/shop-info/shop-info.component';
import { PeopleComponent } from './components/people/people.component';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ShopInfoComponent,
    PeopleComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
