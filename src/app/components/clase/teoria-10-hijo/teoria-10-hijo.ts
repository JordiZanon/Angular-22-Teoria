import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria-10-hijo',
  styleUrl: './teoria-10-hijo.css',
  templateUrl: './teoria-10-hijo.html',
})
export class Teoria10Hijo {
  // ANTIGUAMENTE EN ANGULAR ...
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  // HOY EN DÍA EN ANGULAR
  quantityModern = model<number>(1);

  modifyQuantity(newQuantity: number) {
    this.quantityChange.emit(newQuantity);

    this.quantityModern.update(q => q + newQuantity);
  }
}
