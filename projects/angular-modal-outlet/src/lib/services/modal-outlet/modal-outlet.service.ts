import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { ComponentModel } from '../../interfaces/component-model';

@Injectable({
  providedIn: 'root'
})
export class ModalOutletService {
  /**
   * An observable tracking the current modal component's model
   */
  public modalComponentModel$: Observable<ComponentModel>;
  private modalComponentModel: BehaviorSubject<ComponentModel>;

  private currentSubscriber: Subscriber<ComponentModel>;

  constructor() {
    this.modalComponentModel = new BehaviorSubject(null);
    this.modalComponentModel$ = this.modalComponentModel.asObservable();
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
    this.modalComponentModel.next({
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
    this.modalComponentModel.next(null);

    if (this.currentSubscriber) {
      // Let the subscriber to the modal know that the modal closed with whatever result we have
      this.currentSubscriber.next(result);
      this.currentSubscriber.complete();
      this.currentSubscriber = null;
    }
  }

  /**
   * Checks if there is currently an open modal
   *
   * @returns whether or not there is currently an open modal
   */
  public isModalOpen(): boolean {
    return this.modalComponentModel.getValue() !== null;
  }
}
