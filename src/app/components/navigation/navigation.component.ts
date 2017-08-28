import { Component, OnInit } from '@angular/core';
import { navItemAnimation } from '../../animations/navbar-animation';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    navItemAnimation
  ]
})
export class NavigationComponent implements OnInit {
  animationState: Object = {
    events: 'void',
    blog: 'void',
    contact: 'void',
    about: 'void'
  }

  constructor() { }

  hoverOn(nav_item: string) { this.animationState[nav_item] = 'hover'; }
  hoverOff(nav_item: string) { this.animationState[nav_item] = 'void'; }

  ngOnInit() {
  }

}
