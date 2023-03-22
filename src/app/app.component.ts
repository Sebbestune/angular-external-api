import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-external-api-show';

  searchquery = "";

  constructor(private recipeService:RecipeService){}

  allRecipes: any;

  getRecipes(){
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        return recipe;
      })
      console.log(result.hits[0]);
      console.log(recipes)

      this.allRecipes = recipes;
    })
  }
}
