import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pikachu_img_path: string;
  location_img_path: string;
  tele_img_path: string;

  constructor() {
    this.pikachu_img_path = 'wp-content/themes/angular/dist/assets/img/pikachu.svg';
    this.location_img_path = 'wp-content/themes/angular/dist/assets/img/location.svg';
    this.tele_img_path = 'wp-content/themes/angular/dist/assets/img/tele.svg';
  }

  ngOnInit() {
  }
}
