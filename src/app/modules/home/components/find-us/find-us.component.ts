import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'home-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css']
})
export class FindUsComponent implements OnInit {
  private map_img_path: string = environment.assetsURI + '/assets/img/location-map.png';

  constructor() { }

  ngOnInit() {

  }
}
