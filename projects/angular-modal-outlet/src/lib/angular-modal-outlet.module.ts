import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalOutletComponent } from './components/modal-outlet/modal-outlet.component';
import { ModalOutletService } from './services/modal-outlet/modal-outlet.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
  declarations: [
    ModalOutletComponent
  ],
  exports: [ModalOutletComponent],
  providers: [ModalOutletService]
})
export class AngularModalOutletModule { }
