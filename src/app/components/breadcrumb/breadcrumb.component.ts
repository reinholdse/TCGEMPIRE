import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
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
