import { Component, signal } from '@angular/core';
import { Teoria10Hijo } from '../teoria-10-hijo/teoria-10-hijo';
import {
  QuantityStepperParentComponent
} from '../../web/quantity-stepper-parent-component/quantity-stepper-parent-component';

@Component({
  imports: [Teoria10Hijo, QuantityStepperParentComponent],
  selector: 'app-teoria-10',
  styleUrl: './teoria-10.css',
  templateUrl: './teoria-10.html',
})
export class Teoria10 {
  // AHORA EN ANGULAR...
  data = signal<number>(5);

  // ANTIGUAMENTE EN ANGULAR...
  recogerDato(event: number) {
    console.log('Dato antiguo',event);
  }

  updateModernQuantity(event: number) {
    console.log(event);
  }

  updateQuantity(event: number) {
    console.log(event);
  }
}


/* PRÁCTICAS
*
* Práctica I: Filtro de Búsqueda y Categoría con model()[cite: 9]
Vamos a crear un componente de barra de herramientas reutilizable que controle la búsqueda y la categoría[cite: 9]
* seleccionada en el catálogo mediante model().[cite: 9]
Instrucciones para el alumno[cite: 9]
Crea ProductFilterComponent en src/app/components/product-filter/.[cite: 9]
Declara dos señales de modelo:[cite: 9]
searchQuery = model<string>('')[cite: 9]
selectedCategory = model<string>('Todas')[cite: 9]
Incluye un input de texto para la búsqueda y un selector HTML (<select>) de Bootstrap para las categorías.[cite: 9]
* Utiliza el evento (input) o (change) para actualizar las señales con .set().[cite: 9]
En el padre (CatalogComponent), conecta el filtro mediante [(searchQuery)] y [(selectedCategory)] a dos[cite: 9]
* señales locales, y filtra dinámicamente la lista de productos usando una señal derivada computed().[cite: 9]
* */

/*
* PRÁCTICA 2
*
* Práctica II: Selector de Unidades en la Tarjeta de Producto
Vamos a integrar el componente QuantityStepperHijoComponent en la tarjeta de producto para permitir al usuario
* seleccionar cuántas unidades desea añadir antes de pulsar el botón de compra.
Instrucciones para el alumno
Crea el componente QuantityStepperHijoComponent con quantity = model<number>(1) y un límite máximo basado en
* una input() opcional maxStock.
Integre el QuantityStepperComponent dentro de ProductCardComponent usando [(quantity)]="selectedQuantity".
Al hacer clic en "Añadir al Carrito", emite el producto junto con la cantidad seleccionada.

* */
