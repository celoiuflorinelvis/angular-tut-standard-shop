import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // Find product
    this.product = products.find((product) => product.id === productId);
  }

  onAddProductToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      window.alert(`Product ${this.product.name} was added to cart.`);
    } else {
      window.alert(`Product was not found.`);
    }
  }
}
