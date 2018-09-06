import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { Sub4Component } from './sub4/sub4.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    Sub2Component,
    Sub3Component,
    Sub4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
