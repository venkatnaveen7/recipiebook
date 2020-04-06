import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('menuItemCallBack') featureEvent = new EventEmitter<{
    feature: string;
  }>();

  onSelectItem = item => {
    this.featureEvent.emit({ feature: item });
  };

  constructor() {}

  ngOnInit(): void {}
}
