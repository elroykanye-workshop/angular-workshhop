import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-image',
  template: `
    <img class="product-image" [src]="imageUrl" alt="Photo of  {{imageUrl}}">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() imageUrl: string;
  @HostBinding("attr.class") cssClass = "ui small large";

  constructor() {
    this.imageUrl = "";
  }

  ngOnInit(): void {
  }

}
