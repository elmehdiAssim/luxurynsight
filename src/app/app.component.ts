import { Component, OnInit } from '@angular/core';
import { CallsService } from './calls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'luxurynsight';
  news;
  page = 1;
  hitsPerPage = 15;
  nbHits;
  defaultPhoto = 'https://www.luxurynsight.com/podcasts/images/logo-1200px.png';
  constructor(private service: CallsService) { }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.service.getNews().subscribe((news: any) => {
      this.hitsPerPage = news.hitsPerPage;

      news.hits.forEach(e => {
        e._tags = e._tags.filter((tag) => {
          if (tag.visible === true) {
            return tag;
          }
        });
      });
      this.news = news.hits;
    });
  }
}
