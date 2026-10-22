import {
  booleanAttribute,
  Component,
  computed,
  input,
  InputSignal,
  InputSignalWithTransform, output,
  Signal
} from '@angular/core';

@Component({
  selector: 'app-teoria-9-hijo',
  imports: [],
  templateUrl: './teoria-9-hijo.html',
  styleUrl: './teoria-9-hijo.scss',
})
export class Teoria9Hijo {
  productName: InputSignal<string> = input<string>('Producto genérico'); // OPCIONAL
  price: InputSignal<number> = input.required<number>(); // OBLIGATORIO
  productId = input.required<number>();

  //Transforma un string en bolean
  disabled: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});

  priceWithTaxes: Signal<number> = computed((): number => this.price() * 1.21);

  onAddToCart =output<number>();

  addToCart (productId: number) {
    this.onAddToCart.emit(productId);
  }

}
