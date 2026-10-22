import {Component, computed, input, InputSignal, output, signal, WritableSignal} from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {CurrencyPipe} from '@angular/common';
import {QuantityStepperHijoComponent} from '../quantity-stepper-hijo-component/quantity-stepper-hijo-component';

@Component({
  selector: 'app-product-card-component',
  imports: [
    CurrencyPipe,
    QuantityStepperHijoComponent
  ],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss',
})
export class ProductCardComponent {
    product:InputSignal<Product> = input.required<Product>();

  // EJERCICIO
  /*
   * Vamos a aplicar el méto do .set() y .update() para manejar estados primitivos en un componente interactivo.
  Instrucciones
  En el componente ProductCardComponent que diseñaste en el Workshop anterior, vamos a implementar un control dinámico
  * de stock para el botón de compra.
  Declara una señal llamada stock inicializada en 5.
  Declara otra señal booleana llamada showAlert inicializada en false.
  Modifica la plantilla HTML para que el botón de "Añadir al carrito" disminuya el stock en 1 cada vez que se pulse,
  * utilizando .update().
  Si el stock llega a 0, el botón debe deshabilitarse automáticamente y la señal showAlert debe pasar a true mediante
  * .set(), mostrando un mensaje de advertencia estilizado con Bootstrap.
  * */


  stock: WritableSignal<number> = signal<number>(5);
  showAlert: WritableSignal<boolean> = signal<boolean>(false);

  isLowStock = computed(() => this.product().stock > 0 && this.product().stock < 3)

  isOutOfStock =computed(() => this.product().stock === 0)

  addToCart = output<{product: Product, quantity: number}>();

  onAddToCart() {
    // if (this.stock() > 0){
    //   this.stock.update(currentStock => currentStock -1);
    // }
    // if (this.stock() === 0){
    //   this.showAlert.set(true);
    // }

    // this.product().stock--;
    if (!this.isOutOfStock()) {
      this.addToCart.emit({
        product: this.product(),
        quantity: this.selectedQuantity()
      });
      this.selectedQuantity.set(1);
    }
  }

  /* EJERCICIO 2
 *
 * Utilizar .update() combinado con el operador spread (...) de TypeScript para modificar de forma segura
 * un objeto complejo dentro de una Signal.
Instrucciones
Crea un componente standalone temporal de administración en src/app/components/user-profile.component para
 * simular la edición de los datos de envío del comprador utilizando una Signal de tipo objeto.
Define la interfaz UserProfile con name, city y isPremium.
Instancia una señal mutable user que contenga los datos iniciales de un cliente de Valencia.
Crea un botón "Cambiar de Ciudad" que utilice .update() para actualizar la propiedad city a 'Madrid' de
 * forma inmutable, manteniendo el resto de propiedades intactas.
Crea otro botón para alternar el estado de isPremium (de true a false y viceversa) usando .update().
 *
 * */

viewDetails = output<Product>();
  selectedQuantity = signal (1);
 onViewDetails() {
this.viewDetails.emit(this.product());
  }
}
