import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { ComponentModel } from '../../interfaces/component-model';

@Injectable({
  providedIn: 'root'
})
export class ModalOutletService {
  private modalComponent: BehaviorSubject<ComponentModel>;
  public modalComponent$: Observable<ComponentModel>;

  private currentSubscriber: Subscriber<ComponentModel>;

  constructor() {
    this.modalComponent = new BehaviorSubject(null);
    this.modalComponent$ = this.modalComponent.asObservable();
  }

  /**
   * Opens a modal containing a new component instance of the given component type, and populated
   * with the given data. This will close any open modals before opening the next modal.
   *
   * @param componentType the class of the component to instantiate
   * @param data the data to populate the component instance with
   * @returns an observable which will send an event for the result of the dialog
   */
  public showModal(componentType: any, data: any = null): Observable<ComponentModel> {
    // Close any existing modal without a result
    this.closeModal();

    // Tell the modal component outlet there is a new modal
    this.modalComponent.next({
      componentType: componentType,
      data: data
    });

    // Return an observable for the new modal
    return new Observable<ComponentModel>((subscriber: Subscriber<ComponentModel>) => {
      this.currentSubscriber = subscriber;
    });
  }

  /**
   * Closes the current modal, if there is one
   *
   * @param result the result to pass to the subscriber of the modal observable
   */
  public closeModal(result: any = null): void {
    // Tell the modal component outlet to close the modal
    this.modalComponent.next(null);

    if (this.currentSubscriber) {
      // Let the subscriber to the modal know that the modal closed with whatever result we have
      this.currentSubscriber.next(result);
      this.currentSubscriber.complete();
      this.currentSubscriber = null;
    }
  }
}
