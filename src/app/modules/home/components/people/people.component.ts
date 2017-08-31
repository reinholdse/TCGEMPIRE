
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private people_img_paths: string[] = ['assets/img/people1.png', 'assets/img/people2.png', 'assets/img/people3.png'];

  constructor() { }

  ngOnInit() {

  }
}
