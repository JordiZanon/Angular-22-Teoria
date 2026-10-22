import {Component, computed, effect, signal} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-summary-t8',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-summary-t8.html',
  styleUrl: './cart-summary-t8.scss',
})
export class CartSummaryT8 {

// 1. SEÑALES MUTABLES (Estado base que el usuario puede modificar)
  itemsCountCantidadEnCarrito = signal(1);          // Cantidad de productos en el carrito
  unitPrice = signal(50);          // Precio base por unidad
  couponDiscount = signal(10);     // Porcentaje de descuento (ej. 10%)

  // 2. CONSTANTE DE CLASE (Equivalente al 'final' de Java, no se puede modificar)
  readonly IVA = 0.21;

// 3. SEÑALES DERIVADAS (computed): Se recalculan solas cuando cambian sus dependencias
  rawSubtotalCantidadXPrecio = computed(() => this.itemsCountCantidadEnCarrito() * this.unitPrice());
  discountAmountPrecioConDescuento = computed(() => this.rawSubtotalCantidadXPrecio() * this.couponDiscount() / 100);
  taxAmountPreciosConIVA = computed(() => (this.rawSubtotalCantidadXPrecio() - this.discountAmountPrecioConDescuento()) * this.IVA);
  grandTotalAPagar = computed(() => this.rawSubtotalCantidadXPrecio() - this.discountAmountPrecioConDescuento() + this.taxAmountPreciosConIVA());
//grandTotal     Total a pagar = Subtotal inicial - precioConDescuento + IVA

  // 4. CONTROL DE CARGA: Señal para saber si ya se inicializaron los datos del navegador
  loaded = signal(false);

  // 5. effect() Funcion q esta pendiente de los cambios reactivos en signals, y cuando hay un cambio reactivo, lanza la funcion effect
  constructor() {
    effect(() => {
      console.log('GrandTotalAPagar', this.grandTotalAPagar());
      console.log('ItemsCountCantidadEnCarrito', this.itemsCountCantidadEnCarrito());

      let cartState;

      // Si ya está cargado, guardamos los valores actuales de las señales
      if (this.loaded()){
        cartState = {
          items: this.itemsCountCantidadEnCarrito(),
          price: this.unitPrice(),
          discount: this.couponDiscount(),
          total: this.grandTotalAPagar()
        }
      } else {
        // --- EXPLICACIÓN DE ESTA LÍNEA ---
        // 1. localStorage solo sabe guardar textos planos (strings). No puede guardar objetos complejos de JavaScript directamente.
        // 1. localStorage.getItem('cartState'): Va a la memoria del navegador a buscar el texto guardado con esa clave. Devuelve un texto plano (string) o null si no encuentra nada.
        // 2. as string: Fuerza a TypeScript a tratar el resultado como un texto seguro string.
        // 3. Cuando recuperas un texto string del navegador, JSON.parse() se encarga de transformar ese texto plano de vuelta en un objeto
        //    utilizable por TypeScript para que puedas acceder a sus propiedades (como cartState.items).
        cartState = JSON.parse(localStorage.getItem('cartState') as string);

        this.loaded.set(true);
        this.itemsCountCantidadEnCarrito.set(cartState.items);
        this.unitPrice.set(cartState.price);
        this.couponDiscount.set(cartState.discount);
      }

      // --- EXPLICACIÓN DE ESTA LÍNEA    explicado de dos formas distintas---
      // 1. JSON.stringify(cartState): Como el navegador SOLO sabe guardar textos planos, este método
      //    convierte nuestro objeto 'cartState' entero en una gran cadena de texto con formato JSON.
      // 2. localStorage.setItem('digishop_cart', ...): Guarda ese texto resultante en la memoria del
      //    navegador bajo la etiqueta 'digishop_cart' para que no se pierda al recargar.

      // 1. cartState: Es un objeto de JavaScript (que contiene números y propiedades).
      // 2. JSON.stringify(...): Hace el proceso inverso a parse.
      //    Como el localStorage exige que se le guarden textos,
      //    JSON.stringify() toma tu objeto cartState y lo convierte en una cadena de texto con formato JSON (un string largo que parece un objeto).
      // 3. localStorage.setItem('digishop_cart', ...): Guarda ese texto resultante en la memoria del navegador asignándole la etiqueta (clave)
      //    'digishop_cart' para que pueda ser recuperado más adelante.

      localStorage.setItem('digishop_cart', JSON.stringify(cartState));
      console.log('Carrito guardado correctamente!');
    });
  }

  protected incrementItems() {
    this.itemsCountCantidadEnCarrito.update(val => val + 1);
  }
  protected applySpecialCoupon() {
    this.couponDiscount.set(25);
  }
}
