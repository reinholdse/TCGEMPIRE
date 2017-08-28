import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  logo_big_path: string = 'assets/img/logo_big.svg';
  breadcrumb: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url.slice(1);
        this.breadcrumb = url.charAt(0).toUpperCase() + url.slice(1);
      }
    });
  }

  isHomePage() {
    return (this.breadcrumb === '') ? true : false;
  }
}
