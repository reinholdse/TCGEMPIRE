import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Params, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';

interface IBreadcrumb {
  label: string,
  url: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {


        let urlParts = this.router.url.slice(1).split('/');
        let url = '';


        this.breadcrumbs = [];


        for (let part of urlParts) {
          url += '/' + part;


          let breadcrumb: IBreadcrumb = {
            label: part.charAt(0).toUpperCase() + part.slice(1),
            url: url
          }


          this.breadcrumbs.push(breadcrumb);
        }



      }
    });
  }

  isHomePage() {
    return (this.breadcrumbs.length === 1 && this.breadcrumbs[0].label === "") ? true : false;
  }
}
