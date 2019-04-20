import { BrowserModule } from '@angular/platform-browser';
import { AngularModalOutletModule } from 'angular-modal-outlet';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularModalOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleDialogComponent
  ]
})
export class AppModule { }
