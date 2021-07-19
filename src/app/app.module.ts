import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRIME_MODULES } from './prime';
import { CheckboxPocComponent } from './checkbox-poc/checkbox-poc.component';
import { TablePocComponent } from './table-poc/table-poc.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxPocComponent,
    TablePocComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PRIME_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
