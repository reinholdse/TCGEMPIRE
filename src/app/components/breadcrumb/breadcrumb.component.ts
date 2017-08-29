import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Params, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';

interface IBreadcrumb {
  label: string,
  params: Params,
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
        let root = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        console.log("FINALLY");
        console.log(this.breadcrumbs);
      }
    });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string='',
    breadcrumbs: IBreadcrumb[]=[]
  ): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    console.log(route.snapshot.url);

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      console.log("huhu");

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        console.log("Hi");
        console.log(this.getBreadcrumbs(child, url, breadcrumbs));
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      console.log("bubu");

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  isHomePage() {
    return (this.breadcrumbs.length === 0) ? true : false;
  }
}
