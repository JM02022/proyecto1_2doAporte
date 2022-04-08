import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//abc
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//bca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
