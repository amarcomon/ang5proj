import { Component, OnInit } from '@angular/core';
import { Recipe } from './shared/models/recipe.models';
import { RecipesService } from './shared/services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  public selectedRecipe : Recipe;
  constructor( private recipeService: RecipesService) { }

  ngOnInit() { 

    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe)=>{this.selectedRecipe=recipe;}
    );
  }

}
