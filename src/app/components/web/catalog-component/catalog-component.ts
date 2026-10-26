import {Component, computed, inject, signal} from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {PRODUCTS_MOCK} from '../../../common/mocks/products.mock';
import {ProductCardComponent} from '../product-card-component/product-card-component';
import {CurrencyPipe} from '@angular/common';
import {ProductFilterComponent} from '../product-filter-component/product-filter-component';
import {CartService} from '../../../services/cart-service';
import {CartItem} from '../../../common/interfaces/interfaces-cart-item';

@Component({
  selector: 'app-catalog-component',
  imports: [
    ProductCardComponent,
    CurrencyPipe,
    ProductFilterComponent
  ],
  templateUrl: './catalog-component.html',
  styleUrl: './catalog-component.scss',
})
export class CatalogComponent {
  private readonly cartService: CartService = inject(CartService);
products = signal<Product[]>(PRODUCTS_MOCK);
lastViewedProduct = signal<Product | null> (null);
selectedCount = signal<number>(0);


  // EJERCICIOS SESIÓN 10
  searchTerm = signal('');
  categoryTerm = signal('All');

  filteredProducts = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const cat = this.categoryTerm();

    return this.products().filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(query);
      const matchesCategory = cat === 'All' || product.category === cat;
      return matchesSearch && matchesCategory;
    });
  });


  reduceStock(selectedProduct: CartItem) {
    this.selectedCount.update(count => count + selectedProduct.quantity);
    this.products.update(currentProducts => currentProducts.map(prod => {
        if (prod.id === selectedProduct.product.id && prod.stock > 0 && prod.stock >= selectedProduct.quantity) {
          return {...prod, stock: prod.stock - selectedProduct.quantity};
        }
        return prod;
      })
    )
    this.cartService.addProduct(selectedProduct);
  }

  protected onProductDetails(poduct: Product) {
    this.lastViewedProduct.set(poduct)
  }
}
