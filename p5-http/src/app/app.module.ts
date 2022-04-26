import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './component/simple-http/simple-http.component';
import {HttpClientModule} from "@angular/common/http";
import {youtubeSearchInjectable} from "./injectable/youtube-search.injectable";
import { SearchBoxComponent } from './component/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    youtubeSearchInjectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
