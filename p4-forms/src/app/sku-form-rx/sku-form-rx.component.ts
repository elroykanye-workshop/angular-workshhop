import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppValidators} from "../app.validators";

@Component({
  selector: 'app-sku-form-rx',
  templateUrl: './sku-form-rx.component.html',
  styleUrls: ['./sku-form-rx.component.css']
})
export class SkuFormRxComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, AppValidators.skuValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => console.log(`sku changed to ${value}`)
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => console.log(`form changed to ${form}`)
    );
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log("You submitted this form:");
    console.log(value);
  }
}
