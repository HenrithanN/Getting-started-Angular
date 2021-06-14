import { Products } from './../products';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Products;
  @Output() notify = new EventEmitter();
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
