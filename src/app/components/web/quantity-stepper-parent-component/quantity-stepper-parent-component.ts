import { Component, signal } from '@angular/core';
import { QuantityStepperHijoComponent } from '../quantity-stepper-hijo-component/quantity-stepper-hijo-component';

@Component({
  imports: [QuantityStepperHijoComponent],
  selector: 'app-quantity-stepper-parent-component',
  styleUrl: './quantity-stepper-parent-component.css',
  templateUrl: './quantity-stepper-parent-component.html',
})
export class QuantityStepperParentComponent {
  orderQuantity = signal<number>(1);
}
