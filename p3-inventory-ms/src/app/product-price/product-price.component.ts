import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-price',
  template: `
    <div class="price-display">\${{price}}</div>
  `,
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  @Input("price") price: number;
  constructor() {
    this.price = 0;
  }

  ngOnInit(): void {
  }

}
