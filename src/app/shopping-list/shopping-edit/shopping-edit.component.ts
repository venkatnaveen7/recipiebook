import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { IngredientModel } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') ingredientName: ElementRef;
  @ViewChild('amount') ingredientAmount: ElementRef;
  @Output('ingredientsAdded') ingAdd = new EventEmitter<IngredientModel>();

  addIngredients() {
    console.log(this.ingredientAmount);
    this.ingAdd.emit({
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
