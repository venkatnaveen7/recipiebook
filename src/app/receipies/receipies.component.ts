import { Component, OnInit } from '@angular/core';
import { RecepieModel } from './recepie.model';

@Component({
  selector: 'app-receipies',
  templateUrl: './receipies.component.html',
  styleUrls: ['./receipies.component.css']
})
export class ReceipiesComponent implements OnInit {
  selectedItem: RecepieModel;

  itemWasSelected(event) {
    this.selectedItem = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
