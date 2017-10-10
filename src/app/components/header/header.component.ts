import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo_big_path: string = environment.assetsURI + '/assets/img/logo_big.svg';

  constructor() { }

  ngOnInit() { }
}
