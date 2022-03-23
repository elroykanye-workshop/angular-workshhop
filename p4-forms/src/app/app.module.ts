import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkuFormTdComponent } from './sku-form-td/sku-form-td.component';
import {FormsModule} from "@angular/forms";
import { SkuFormRxComponent } from './sku-form-rx/sku-form-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuFormTdComponent,
    SkuFormRxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
