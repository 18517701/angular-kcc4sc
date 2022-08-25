import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
