
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css']
})
export class FindUsComponent implements OnInit {
  private map_img_path: string = 'wp-content/themes/angular/dist/assets/img/location-map.png';

  constructor() { }

  ngOnInit() {

  }
}
