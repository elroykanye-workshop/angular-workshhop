import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sku-form-rx',
  templateUrl: './sku-form-rx.component.html',
  styleUrls: ['./sku-form-rx.component.css']
})
export class SkuFormRxComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123'],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    
  }
}
