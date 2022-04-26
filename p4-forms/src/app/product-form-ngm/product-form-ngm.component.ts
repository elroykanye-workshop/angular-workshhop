import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form-ngm',
  templateUrl: './product-form-ngm.component.html',
  styleUrls: ['./product-form-ngm.component.css']
})
export class ProductFormNgmComponent implements OnInit {
  productName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
