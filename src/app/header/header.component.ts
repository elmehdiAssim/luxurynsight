import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CallsService } from '../calls.service';

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

  domaines;

  constructor(private service: CallsService) { }

  ngOnInit() {
    this.service.getDomains().subscribe((domaines: any) => {
    this.domaines = domaines.facets.domain
    console.log(domaines);
    })


  }

  onToggleView() {
    this.toggleView.emit();
  }

}
