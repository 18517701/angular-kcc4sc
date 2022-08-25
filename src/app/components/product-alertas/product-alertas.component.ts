import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alertas',
  templateUrl: './product-alertas.component.html',
  styleUrls: ['./product-alertas.component.css'],
})
export class ProductAlertasComponent implements OnInit {
  @Input() product: any;
  //este es el router para el product-detalles
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
