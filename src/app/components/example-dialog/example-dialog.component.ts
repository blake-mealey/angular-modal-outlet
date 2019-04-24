import { Component, EventEmitter } from '@angular/core';
import { ModalOutletService } from 'angular-modal-outlet';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.css']
})
export class ExampleDialogComponent {
  public name: string;
  public word: string;
  public result: EventEmitter<string>;

  constructor() {
    this.result = new EventEmitter<string>();
  }
}
