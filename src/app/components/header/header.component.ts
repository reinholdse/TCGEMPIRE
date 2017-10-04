import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo_big_path: string = 'wp-content/themes/angular/dist/assets/img/logo_big.svg';

  constructor() { }

  ngOnInit() { }
}
