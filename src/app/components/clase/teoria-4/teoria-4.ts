import { Component } from '@angular/core';
import {User} from '../../../common/interfaces/interfaces';

@Component({
  selector: 'app-teoria-4',
  imports: [],
  templateUrl: './teoria-4.html',
  styleUrl: './teoria-4.scss',
})
export class Teoria4 {
  miArray: number[] = [1, 2, 3];

  ngOnInit(): void {
    this.ejemplo();
  }

  ejemplo(): void {
    this.miArray.push(2);   //El push es q añade al final del array
    console.log(this.miArray);
  }

  ejemplo2(): void {
    const cart = [{id: 1, qty: 1}]
    cart[0].qty = 2;


    const updatedCart = cart.map(item => item.id === 1 ? {...item, qty: 2} : item);
  }

  ejemplo3(): void {
    const user: User = {
      id: '1',
      email: 'a@a.com',
      role: 'admin',
      name: 'Pepe',
    }

    const {name, email} = user;
    console.log(name, email);

    const updatedUser = {...user, role: 'guest'};

    console.log(updatedUser);
  }

  ejemploArrays(): void {
    // map: Transformar los elementos de un array
    // filter: Filtrar los elementos de un array que cumplan una condicion
    // reduce: Acumulador del contenido del array

    const miArray = [1, 2, 3];

    const array2 = miArray.map(item => item = item + 1);
    console.log('map', array2);

    console.log('map2', miArray.map(item => item = item + 1));

    console.log('filter', miArray.filter(item => item > 2));

    console.log('reduce', miArray.reduce((a, b) => a + b, 0));
  }


  ejemploObjetos(): void {
    const original = {title: 'Camiseta', price: 20};
    const copia = original; // MAL

    copia.price = 25;

    console.log(original.price);

    const original2 = {title: 'Camiseta', price: 20};
    const copiaSegura = {...original2}; // BIEN
    copiaSegura.price = 50;
    console.log(original2);
  }


  /*
* Vamos a aplicar map y filter para procesar una lista de productos simulando las necesidades de un buscador
* o un panel de rebajas.
Partiendo de un array de productos mock (que use la interfaz Product de la sesión anterior),
* implementa las siguientes funciones utilizando funciones flecha fuertemente tipadas:
Paso 1: Filtra por categoría
Crea una función llamada filterProductsByCategory(products: Product[], category: CategoryType): Product[]
* que devuelva únicamente los productos de la categoría seleccionada.
Paso 2: Aplica un descuento global
Crea una función llamada applyDiscount(products: Product[], percentage: number): Product[]
* que reduzca el precio de todos los productos en el porcentaje indicado, sin modificar los objetos originales.
Paso 3: Encadena las operaciones
Crea una rutina que obtenga los productos de la categoría 'electronics' y les aplique un 10% de descuento
* en una sola línea de ejecución.
*/

}
