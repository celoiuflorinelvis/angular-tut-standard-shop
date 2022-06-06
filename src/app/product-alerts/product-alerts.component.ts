import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notifyProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onNotifyProduct(): void {
    this.notifyProduct.emit(this.product);
  }
}
