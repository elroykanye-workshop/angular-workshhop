import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'product-list',
  template: `
    <div class="ui items">
      <product-row
        *ngFor="let product of productList"
        [product]="product"
        (click)="clicked(product)"
        [class.selected]="isSelected(product)">
      </product-row>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input("productList") productList: Product[];

  @Output("onProductSelected") onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.productList = [];
    this.currentProduct = Product.defaultProduct();
    this.onProductSelected = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }


  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) : boolean {
    if(!product || !this.currentProduct) return false;
    return product.sku === this.currentProduct.sku;
  }
}
