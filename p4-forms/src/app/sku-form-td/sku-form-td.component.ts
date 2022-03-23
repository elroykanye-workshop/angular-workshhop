import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku-form-td',
  templateUrl: './sku-form-td.component.html',
  styleUrls: ['./sku-form-td.component.css']
})
export class SkuFormTdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log("You submitted this form");
    console.log(value)
  }
}
