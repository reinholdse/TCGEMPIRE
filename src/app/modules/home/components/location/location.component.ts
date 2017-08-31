
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  private map_img_path: string = 'assets/img/location-map.png';

  constructor() { }

  ngOnInit() {

  }
}
