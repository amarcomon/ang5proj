import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.models';
import { RecipesService } from '../../shared/services/recipes.service';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {



  @Input() recipe: Recipe;

  constructor( private recipesService: RecipesService) { }

  ngOnInit() { }

  onSelected(){

    this.recipesService.recipeSelected.emit(this.recipe);
   }

}
