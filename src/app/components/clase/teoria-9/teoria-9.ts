import { Component } from '@angular/core';
import {Teoria9Hijo} from '../teoria-9-hijo/teoria-9-hijo';
import {Product} from '../../../common/interfaces/interfaces';

@Component({
  selector: 'app-teoria-9',
  imports: [
    Teoria9Hijo
  ],
  templateUrl: './teoria-9.html',
  styleUrl: './teoria-9.scss',
})
export class Teoria9 {

  protected onAddToCart(event: number) {
console.log(event);
  }

  /* EJERCICIOS
  *
  * Vamos a convertir la tarjeta de producto de "DigiShop" para que reciba sus datos desde una lista del[cite: 5]
  * componente padre usando señales de entrada estrictas.[cite: 5]
  Instrucciones para el alumno[cite: 5]
  Asegurate de tener la interfaz Product en src/app/models/product.model.ts (id, title, price, stock, category).[cite: 5]
  En ProductCardComponent, sustituye cualquier propiedad local por una[cite: 5]
  * entrada requerida: product = input.required<Product>().[cite: 5]
  Crea una señal derivada[cite: 5]
  isLowStock = computed(() => this.product().stock < 3) para mostrar una[cite: 5]
  * etiqueta de "Últimas unidades" en la tarjeta.[cite: 5]
  En el componente padre ProductListComponent, define un array de productos[cite: 5]
  * en una signal() y renderízalos pasándoles la entrada obligatoria.[cite: 5]
  *
  * */
  /* EJERCICIO 2
  *
  * Vamos a notificar al componente padre cuando el usuario hace clic en "Añadir al Carrito" o "Ver Detalle",
  * pasando la información necesaria sin mutar el estado en el hijo.
  Instrucciones para el alumno
  En ProductCardComponent, declara un output funcional: addToCart = output<Product>().
  Añade un botón en la plantilla que invoque un
  * método onSelectProduct() el cual disparará this.addToCart.emit(this.product()).
  En el componente padre ProductListComponent, escucha el evento en la plantilla con
  * la sintaxis habitual de binding (addToCart)="handleAddToCart($event)".
  El padre deberá actualizar su propio contador global de productos seleccionados en el carrito usando .update().
  * */



}
