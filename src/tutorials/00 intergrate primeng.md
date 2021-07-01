## Learning Objective
- [x] install neccessary packages to start using primeng in this project


## Step 1 - Install necessary packages
```sh
npm i primeng primeicons
```

## Step 2 - Include necessary stylesheets
- update the angular.json > style prop with the below entries
```json
    "styles": [
        "node_modules/primeicons/primeicons.css",
        "primeng/resources/themes/bootstrap4-light-blue/theme.css",
        "node_modules/primeng/resources/primeng.min.css",
        "src/styles.scss"
    ],
```

## Step 3 - Configure to enable ripple
- Ripple is an optional animation for the supported components such as buttons.
- Various components utilize angular animations to improve the user experience.
- import `BrowserAnimationsModule` to your application. 

```ts
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice-primeng';

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
```

## Step 4 - Keep a separate file to import prime modules and providers
` create src/app/prime.ts as
```ts
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from "primeng/calendar";

export const PRIME_MODULES: [
    ButtonModule,
    ToastModule,
    CalendarModule
]
```
- udpate `app.module.ts` as

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRIME_MODULES } from './prime';

@NgModule({
  declarations: [
    AppComponent
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
```
## Step 5 - Test out
```html
// app.component.html
<button label="Welcome to Primeng Practice" pButton class="p-button-danger"></button>
```