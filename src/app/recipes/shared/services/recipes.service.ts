import { Recipe } from "../models/recipe.models";
import { EventEmitter } from "@angular/core";


export class RecipesService{

    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('TestRecipe','TestDescription','http://images.media-allrecipes.com/images/75131.jpg'),
        new Recipe('TestRecipe01','TestDescription01','https://natashaskitchen.com/wp-content/uploads/2017/05/Easy-Avocado-Shrimp-Salad-Recipe-600x900.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}