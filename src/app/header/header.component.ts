import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value = '';
  @Input()
  viewOption;
  @Output()
  toggleView = new EventEmitter();

  domaines = ['art', 'comedy', 'action'];

  constructor() { }

  ngOnInit() {
  }

  onToggleView() {
    this.toggleView.emit();
  }

}
