import { Component } from '@angular/core';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { ModalOutletService } from 'angular-modal-outlet';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: string;

  constructor(private modalOutletService: ModalOutletService) {}

  public openModal(): void {
    this.modalOutletService.showModal(ExampleDialogComponent, {
      name: 'Hello, World!',
      word: 'Lorem Ipsum!'
    }, 'result').pipe(filter(Boolean)).subscribe((result) => {
      this.result = result;
    });
  }
}
