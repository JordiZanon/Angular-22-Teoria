import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/structure/navbar/navbar';
import {Footer} from './components/structure/footer/footer';
import {MainComponent} from './components/web/main-component/main-component';
import {TiposDatosComponent} from './components/clase/tipos-datos-component/tipos-datos-component';
import {CartDrawerComponent} from './components/structure/cart-drawer-component/cart-drawer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, MainComponent, TiposDatosComponent, CartDrawerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-22-Teoria');
  isCartOpen = signal(false);
}
