import { BrowserModule } from '@angular/platform-browser';
import { AngularModalOutletModule } from 'angular-modal-outlet';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularModalOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
