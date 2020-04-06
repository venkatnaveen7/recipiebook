import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Onion', 2),
    new IngredientModel('Chilli', 4)
  ];

  newIngAdded(event: IngredientModel) {
    this.ingredients.push(event);
  }
  constructor() {}

  ngOnInit(): void {}
}
