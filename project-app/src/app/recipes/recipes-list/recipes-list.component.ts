import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes : Recipe[] = [new Recipe('A Test Recipe','This is simply a test','a'),new Recipe('A Test Recipe','This is simply a test','a')];

}
