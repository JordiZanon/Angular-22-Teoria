import { Routes } from '@angular/router';
import {Teoria4} from './components/clase/teoria-4/teoria-4';
import {MainComponent} from './components/web/main-component/main-component';
import {Teoria5} from './components/clase/teoria-5/teoria5';
import {CategoriesListComponent} from './components/web/categories-list-component/categories-list-component';
import {CatalogComponent} from './components/web/catalog-component/catalog-component';
import {ProductCardComponent} from './components/web/product-card-component/product-card-component';
import {Teoria7} from './components/clase/teoria-7/teoria-7';
import {UserProfileComponent} from './components/web/user-profile-component/user-profile-component';
import {Teoria8} from './components/clase/teoria-8/teoria-8';
import {CartSummaryT8} from './components/web/cart-summary-t8/cart-summary-t8';
import {Teoria9} from './components/clase/teoria-9/teoria-9';
import {Teoria3} from './components/clase/teoria-3/teoria-3';
import {Teoria10} from './components/clase/teoria-10/teoria-10';
import {Teoria11} from './components/clase/teoria-11/teoria-11';
import {Teoria12} from './components/clase/teoria-12/teoria-12';
import {ProductDetailComponent} from './components/web/product-detail-component/product-detail-component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',  //Indica q la ruta sin nada, redirige a inicio
  },
  {
    path: 'inicio',
    component: MainComponent,
  },
  {
    path: 'clase/teoria3',
    component: Teoria3,
  },
  {
    path: 'clase/teoria4',
    component: Teoria4,
  },
  {
    path: 'clase/teoria5',
    component: Teoria5,
  },
  {
    path: 'clase/teoria7',
    component: Teoria7,
  },
  {
    path: 'clase/teoria8',
    component: Teoria8,
  },
  {
    path: 'clase/teoria9',
    component: Teoria9,
  },
  {
    path: 'clase/teoria10',
    component: Teoria10,
  },
  {
    path: 'clase/teoria11',
    component: Teoria11,
  },
  {
    path: 'clase/teoria12',
    component: Teoria12,
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
  {
    path: 'product-card',
    component: ProductCardComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'cart-summary-t8',
    component: CartSummaryT8,
  },

];
