import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkuFormTdComponent } from './sku-form-td/sku-form-td.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SkuFormRxComponent } from './sku-form-rx/sku-form-rx.component';
import { ProductFormNgmComponent } from './product-form-ngm/product-form-ngm.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuFormTdComponent,
    SkuFormRxComponent,
    ProductFormNgmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
