import {Component, effect, inject, OnInit} from '@angular/core';
import {ProductCardComponent} from '../../web/product-card-component/product-card-component';
import {TeoriaService} from '../../../services/teoria-service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ProductService} from '../../../services/product-service';

@Component({
  imports: [
    ProductCardComponent
  ],
  selector: 'app-teoria-12',
  styleUrl: './teoria-12.scss',
  templateUrl: './teoria-12.html',
})
export class Teoria12 implements OnInit {
  private readonly teoriaService: TeoriaService = inject(TeoriaService);
  private readonly productService: ProductService = inject(ProductService);
  products = toSignal(this.productService.getProducts(),
    {
      initialValue: [] //Para q la web no se inice undefined
    });

  constructor() {
    effect(() => {
      console.log(this.products());
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {

    // ANTIGUAMENTE...
    this.teoriaService.getDatos().subscribe(
      {
        next: data => {
          console.log(data);
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }


}
