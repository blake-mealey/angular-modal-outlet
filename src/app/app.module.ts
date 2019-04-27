import { BrowserModule } from '@angular/platform-browser';
import { NgModalOutletModule } from 'ng-modal-outlet';
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
    NgModalOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleDialogComponent
  ]
})
export class AppModule { }
