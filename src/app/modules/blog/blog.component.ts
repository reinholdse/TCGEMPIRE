import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../services/breadcrumb.service';
import { Article, BlogApiService } from '../../services/blog-api.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  private breadcrumbs: Breadcrumb[];
  private articles: Article[];

  constructor(private breadcrumbService: BreadcrumbService,
              private blogApiService: BlogApiService) {
    this.breadcrumbs = [{ label: 'Blog', url: '/blog' }]
    this.blogApiService.getArticles()
      .subscribe(
        (articles: Article[]) => this.articles = articles,
        (error: any) => console.log('Ostrich went wrong here!') // Ostrich method!
      )
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs(this.breadcrumbs);

  }

}
