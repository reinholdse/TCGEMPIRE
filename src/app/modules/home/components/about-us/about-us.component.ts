
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private people_img_paths: string[] = ['assets/img/people1.png', 'assets/img/people2.png', 'assets/img/people3.png'];

  constructor() { }

  ngOnInit() {

  }
}
