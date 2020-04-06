import { Component, OnInit, Output } from '@angular/core';
import { RecepieModel } from '../recepie.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receipie-list',
  templateUrl: './receipie-list.component.html',
  styleUrls: ['./receipie-list.component.css']
})
export class ReceipieListComponent {
  @Output() itemWasSelected = new EventEmitter<RecepieModel>();

  recepies: RecepieModel[] = [
    new RecepieModel(
      'A Test',
      'Desc',
      'https://www.thespruceeats.com/thmb/JqINAjNes3v69sCg_C-z0kmzCps=/1802x1014/smart/filters:no_upscale()/koftabiryani-56a510d05f9b58b7d0dabf5e.jpg'
    ),
    new RecepieModel(
      'Item2',
      'Item 2 description',
      'https://www.thespruceeats.com/thmb/JqINAjNes3v69sCg_C-z0kmzCps=/1802x1014/smart/filters:no_upscale()/koftabiryani-56a510d05f9b58b7d0dabf5e.jpg'
    )
  ];

  recipieReceived(event) {
    console.log('Recpie Recd', event);
    this.itemWasSelected.emit(event);
  }
}
