import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'home-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private people_img_paths: string[] = [
    environment.assetsURI + '/assets/img/people1.png',
    environment.assetsURI + '/assets/img/people2.png',
    environment.assetsURI + '/assets/img/people3.png'
  ];

  constructor() { }

  ngOnInit() {

  }
}
