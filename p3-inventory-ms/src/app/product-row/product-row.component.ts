import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input("product") product: Product;
  @HostBinding("attr.class") cssClass = "item";


  constructor() {
    this.product = Product.defaultProduct();
  }

  ngOnInit(): void {
  }

}
