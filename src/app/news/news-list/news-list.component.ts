import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {


  @Input()
  news;
  @Input()
  defaultPhoto;
  constructor() { }

  ngOnInit() {
  }

}
