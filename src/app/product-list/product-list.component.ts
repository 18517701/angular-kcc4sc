import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;

  addToCart(product) {
    this.carritoService.addToCart(product);
  }

  comprar() {
    window.alert('The product has been agree!');
  }

  constructor(
    private router: ActivatedRoute,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
