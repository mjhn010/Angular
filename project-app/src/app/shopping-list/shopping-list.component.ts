import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : ingredient[] = [
    new ingredient("apple",3),
    new ingredient("banana",2)
  ];
}
