import { Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-hijo-component',
  styleUrl: './quantity-stepper-hijo-component.css',
  templateUrl: './quantity-stepper-hijo-component.html',
})
export class QuantityStepperHijoComponent {
  value = model<number>(0);
  quantity = model<number>(1);
  maxStock = input<number>(Infinity);


  decrement() {
    if (this.quantity() > 1) {
      this.quantity.update(val => val -1);
    }
  }
  increment() {
    this.quantity.update(val => val + 1);
  }

}
