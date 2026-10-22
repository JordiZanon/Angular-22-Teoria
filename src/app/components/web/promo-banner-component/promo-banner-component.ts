import { Component } from '@angular/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-promo-banner-component',
  imports: [
    NgbAlert,
    FormsModule
  ],
  templateUrl: './promo-banner-component.html',
  styleUrl: './promo-banner-component.scss',
})
export class PromoBannerComponent {

  isUserLoggedIn: boolean = true;
  userTier: 'regular' | 'premium' | 'VIP' = 'premium';
  hasActiveDiscount: boolean = true;

}
