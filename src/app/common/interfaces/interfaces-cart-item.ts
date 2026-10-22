import {Product} from './interfaces';


export interface Order {
  orderId: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: Date;
  paymentMethod: Paymentmetod;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export type Paymentmetod = 'credit_card' | 'paypal' | 'bank_transfer';
