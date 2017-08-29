import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface Breadcrumb {
  label: string,
  url: string
}

@Injectable()
export class BreadcrumbService {
  public breadcrumbs: BehaviorSubject<Breadcrumb[]>;

  constructor() {
    this.breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);
  }

  public setBreadcrumbs(updatedBreadcrumbs: Breadcrumb[]) {
    this.breadcrumbs.next(updatedBreadcrumbs);
  }

  public getObservable(): Observable<Breadcrumb[]> {
    return this.breadcrumbs.asObservable();
  }
}
