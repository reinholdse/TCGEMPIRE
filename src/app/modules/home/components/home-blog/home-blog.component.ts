import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, BlogApiService } from '../../../../services/blog-api.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit, OnDestroy {
  private articles: Article[];
  private articlesSub: Subscription;

  constructor(private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.articlesSub = this.blogApiService.getArticles()
      .subscribe(
        (articles: Article[]) => this.articles = articles,
        (error: any) => console.log('Ostrich went wrong here!') // Ostrich method!
      );
  }

  ngOnDestroy() {
    this.articlesSub.unsubscribe();
  }
  
}
