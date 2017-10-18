import { Component, OnInit } from '@angular/core';

declare var $: any; /* hacky jquery */

@Component({
  selector: 'home-the-shop',
  templateUrl: './the-shop.component.html',
  styleUrls: ['./the-shop.component.css']
})
export class TheShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  private scroll(target: string) {
    $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 1000);
  }
}
