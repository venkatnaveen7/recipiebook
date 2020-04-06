import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { RecepieModel } from '../recepie.model';

@Component({
  selector: 'app-receipie-item',
  templateUrl: './receipie-item.component.html',
  styleUrls: ['./receipie-item.component.css']
})
export class ReceipieItemComponent implements OnInit {
  @Input('recipie') recepie;
  @Output('onRecepieClick') recipieClick = new EventEmitter<RecepieModel>();

  recipieOnclick() {
    this.recipieClick.emit(this.recepie);
  }
  constructor() {}

  ngOnInit(): void {}
}
