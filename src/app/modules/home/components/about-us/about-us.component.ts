
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private people_img_paths: string[] = ['wp-content/themes/angular/dist/assets/img/people1.png', 'wp-content/themes/angular/dist/assets/img/people2.png', 'wp-content/themes/angular/dist/assets/img/people3.png'];

  constructor() { }

  ngOnInit() {

  }
}
