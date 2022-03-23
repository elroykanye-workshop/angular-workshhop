import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-dept',
  template: `
    <div class="product-dept">
      <span *ngFor="let dept of productDept; let i = index">
        <a href="#">{{dept}}</a>
        <span>{{i < (productDept.length-1) ? ">" : ""}}</span>
      </span>
    </div>
  `,
  styleUrls: ['./product-dept.component.css']
})
export class ProductDeptComponent implements OnInit {
  @Input() productDept: string[];
  constructor() {
    this.productDept = [];
  }

  ngOnInit(): void {
  }

}
