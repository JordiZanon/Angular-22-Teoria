import {Component, OnInit} from '@angular/core';
import {CategoryType, Product} from '../../../common/interfaces/interfaces';
import {CartItem} from '../../../common/interfaces/interfaces-cart-item';

@Component({
  selector: 'app-ejercicios-sesion4',
  imports: [],
  templateUrl: './ejercicios-sesion4.html',
  styleUrl: './ejercicios-sesion4.scss',
})
export class EjerciciosSesion4 implements OnInit {


  /*
  Ej 1.
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

  products: Product[] = [
    {
      id: '0',
      title: 'Camiseta',
      price: 5,
      description: 'Camiseta guapa',
      category: 'clothing',
      imageUrl: 'imageCamiseta.jpg',
      stock: 5,
      rating: {
        count: 1,
        rate: 5
      }
    },
    {
      id: '1',
      title: 'Radio',
      price: 15,
      description: 'Radio guapa',
      category: 'electronics',
      imageUrl: 'imageRadio.jpg',
      stock: 5,
      rating: {
        count: 2,
        rate: 4
      }
    },


  ];
  filterProductsByCategory(products: Product[], category: CategoryType): Product[]{
    return products.filter(product => product.category === category);
  }

/*
filterProductsByCategory: Nombre de la función.
products: Nombre que le das a la primera variable de entrada (el array de productos).
: Product[]: Tipado de TypeScript. Le indica al compilador que products debe ser una lista/array ([]) formada por objetos de tipo Product.
category: Nombre de la segunda variable de entrada.
: CategoryType: Tipado de TypeScript. Exige que category sea uno de los textos válidos que definiste en tu tipo ('electronics', 'clothing', 'books' o 'home').
: Product[] (fuera del paréntesis): Tipado de retorno. Indica que esta función promete devolver como resultado final un nuevo array de tipo Product.


return: Devuelve el resultado obtenido hacia fuera de la función.
products: El array original sobre el que vamos a trabajar.
.filter(...): Un método propio de JavaScript que recorre un array elemento por elemento y genera un nuevo array conservando solo aquellos elementos que cumplan una condición verdadera (true).
product: Es el nombre de la variable temporal. Representa al producto individual que .filter() está evaluando en esa vuelta específica.
: La función flecha. Separa el elemento que entra (product) de la condición que se va a evaluar a la derecha.
product.category: Accede a la propiedad category del producto que se está revisando en ese instante (por ejemplo, 'clothing').
===: Operador de comparación estricta en JavaScript. Comprueba si el tipo y el valor de la izquierda son exactamente iguales a los de la derecha.
category: La categoría elegida que pasaste como parámetro a la función (por ejemplo, 'electronics').

  */



  applyDiscount(products: Product[], percentage: number): Product[]{
    return products.map(product => {
      product.price = product.price / percentage * 100;
      return product;
    })
  }

  ngOnInit(): void {
    this.applyDiscount(this.filterProductsByCategory(this.products, 'electronics'), 10);
  }



  /*
* Ej2
* Vamos a resolver el problema clásico de calcular totales e impuestos de un carrito de compras
* utilizando reduce de forma inmutable.
Ejercicio
Utilizando la interfaz InterfacesCartItem creada en la sesión anterior, escribe un conjunto de
* funciones auxiliares que simulen las operaciones críticas que meteremos en nuestro servicio de carrito
* en el Bloque 2:
Calcular el total de productos añadidos (la suma de las cantidades)
Calcular el importe total de la compra (precio * cantidad de cada ítem)
Simular la adición de un producto al carrito de forma inmutable
*/


 calculateTotalItems = (cart: CartItem[]): number => {
    return cart.reduce((acu, item) => acu + item.quantity, 0)
  }

  calculateTotalPrice = (cart: CartItem[]): number => {
    return cart.reduce((acu, item) => acu + (item.product.price* item.quantity), 0)
  }

  addToCartInmutable = (cart: CartItem[], newItem: CartItem): CartItem[] => {
    // Si no existe, lo añado
    // Si existe, aumento la cantidad
    const exists = cart.find(item => item.product.id === newItem.product.id);

    if (exists) {
      return cart.map(item => {
        if (item.product.id === newItem.product.id) {
          return { ...item, quantity: item.quantity + newItem.quantity };
        } else {
          return item;
        }
      });
      // Si no existe, retornamos un nuevo array con el nuevo ítem al final
    } else return [...cart, newItem];
  };

}
