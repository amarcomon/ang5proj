import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [

    new Ingredient('Apple',5),
    new Ingredient('Tomato',12)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){

    this.ingredients.push(ingredient);
  }

}
