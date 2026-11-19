import {computed, effect, Injectable, signal} from '@angular/core';
import {CartItem} from '../common/interfaces/interfaces-cart-item';


const STORAGE_KEY = 'digishop_cart_v1';
@Injectable({
  providedIn: 'root' // <-- ¡Esto es lo que le dice a Angular que el servicio es global!
})
export class CartService {


  #items = signal<CartItem[]>(this.#loadFromStorage());
  readonly items = this.#items.asReadonly();

  readonly totalItems = computed(() =>
    this.#items().reduce((acu, item) => acu + item.quantity, 0));

  readonly totalPrice = computed(() =>
    this.#items().reduce((acu, item) => acu + (item.quantity*item.product.price), 0));

  constructor() {
    effect(() => {
      const currentCart = this.#items();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentCart));
    });
  }


  addProduct(newCartItem: CartItem){
    this.#items.update(items => {
      const index = items.findIndex(item => item.product.id === newCartItem.product.id);

      if ( index > -1){
        return items.map((item, ind) =>
          ind === index ? {...item, quantity: item.quantity + newCartItem.quantity} : item
        )
      }
      return [...items, newCartItem];
    })
  }

  updateQuantity(productId: number, newQuantity: number){
    if (newQuantity <= 0){
      this.removeItem(productId);
      return;
    }
    this.#items.update(items =>
      items.map(item => item.product.id === productId ? {...item, quantity: newQuantity} : item))
  }

  #loadFromStorage(): CartItem[]{
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return [];
    try{
      return JSON.parse(savedData);
    }catch {
      return [];
    }
  }

  removeItem(productId: number) {
    this.#items.update(items => items.filter(item => item.product.id !== productId))
  }

  clearCart(){
    this.#items.set([]);
  }
}
