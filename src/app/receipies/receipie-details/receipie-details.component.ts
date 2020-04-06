import { Component, OnInit, Input } from '@angular/core';
import { RecepieModel } from '../recepie.model';

@Component({
  selector: 'app-receipie-details',
  templateUrl: './receipie-details.component.html',
  styleUrls: ['./receipie-details.component.css']
})
export class ReceipieDetailsComponent implements OnInit {
  @Input() recepie: RecepieModel;

  constructor() {}

  ngOnInit(): void {}
}
