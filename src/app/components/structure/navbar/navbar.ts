import {Component, inject, output} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {CartService} from '../../../services/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [
    NgbCollapse,
    // NgbDropdownModule, // <-- librería NG-Bootstrap
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  // Estado inicial del menú (true = cerrado en móviles)
  isMenuCollapsed = true;
  protected readonly cartService: CartService = inject(CartService);

  openCart =output<void>();
  protected onOpenCart() {
    this.openCart.emit();
  }
}
