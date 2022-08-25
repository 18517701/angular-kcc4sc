import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detalles',
  templateUrl: './product-detalles.component.html',
  styleUrls: ['./product-detalles.component.css'],
})
export class ProductDetallesComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
