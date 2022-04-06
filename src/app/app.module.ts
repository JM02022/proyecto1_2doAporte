import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//abc
    AppComponent
  ],
  imports: [
    BrowserModule//bca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
