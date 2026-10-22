import { Component } from '@angular/core';
import {Category} from '../../../common/interfaces/interfaces';

@Component({
  selector: 'app-categories-list-component',
  imports: [],
  templateUrl: './categories-list-component.html',
  styleUrl: './categories-list-component.scss',
})
export class CategoriesListComponent {

  categories: Category[] = [
    {
      id: 1,
      name: 'electronic',
      active: true,
      icon: 'electronic',
    },
    {
      id: 2,
      name: 'clothing',
      active: false,
      icon: 'clothing',
    },
    {
      id: 3,
      name: 'books',
      active: true,
      icon: 'books',
    },
    {
      id: 4,
      name: 'home',
      active: true,
      icon: 'home',
    },
  ];

  categoriesShow = [ ...this.categories ];

 eliminarCat($index: number) {
    this.categoriesShow.splice($index, 1);

  }

  refreshCats() {
    this.categoriesShow = [...this.categories];
  }
}
