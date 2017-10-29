import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

declare var $: any; /* hacky jquery */

@Component({
  selector: 'home-the-shop',
  templateUrl: './the-shop.component.html',
  styleUrls: ['./the-shop.component.css']
})
export class TheShopComponent implements OnInit {
  private iconImgPaths: string[];

  constructor() {
    this.iconImgPaths = [
      environment.assetsURI + '/assets/img/shop-icon-1.svg',
      environment.assetsURI + '/assets/img/shop-icon-2.svg',
      environment.assetsURI + '/assets/img/shop-icon-3.svg',
      environment.assetsURI + '/assets/img/shop-icon-4.svg',
      environment.assetsURI + '/assets/img/shop-icon-5.svg',
      environment.assetsURI + '/assets/img/shop-icon-6.svg',
      environment.assetsURI + '/assets/img/shop-icon-7.svg'
    ]
  }

  ngOnInit() {

  }

  private scroll(target: string) {
    $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 1000);
  }
}
