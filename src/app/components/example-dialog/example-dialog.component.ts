import { Component, EventEmitter } from '@angular/core';
import { ModalComponent, ModalOutletService } from 'angular-modal-outlet';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.css']
})
export class ExampleDialogComponent implements ModalComponent {
  data: any;
  result: EventEmitter<any>;

  constructor(private modalOutletService: ModalOutletService) {}

  public okClicked() {
    this.modalOutletService.closeModal(true);
  }
}
