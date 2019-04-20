import { Component } from '@angular/core';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { ModalOutletService } from 'angular-modal-outlet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-modal-outlet-app';

  constructor(private modalOutletService: ModalOutletService) {
  }

  public openModal(): void {
    this.modalOutletService.showModal(ExampleDialogComponent, {});
  }
}
