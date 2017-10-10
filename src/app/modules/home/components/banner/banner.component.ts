import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner_img_paths: {};

  constructor() {
    this.banner_img_paths = {
      xs: environment.assetsURI + '/assets/img/banner_img_xs.png',
      sm: environment.assetsURI + '/assets/img/banner_img_sm.png',
      md: environment.assetsURI + '/assets/img/banner_img_md.png',
      lg: environment.assetsURI + '/assets/img/banner_img_lg.png',
      xl: environment.assetsURI + '/assets/img/banner_img_xl.png',
    }
  }

  ngOnInit() {

  }
}
