import {Component} from '@angular/core';
import {Product} from "../model/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p3-inventory-ms';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.jpg",
        [],
        109.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/images/products/blue-jacket.jpg",
        [],
        238.99
      ),
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99
      ),
    ];
  }

  onProductSelected(product: Product): void {
    console.log(`Product clicked: ${product}`)
  }



}
