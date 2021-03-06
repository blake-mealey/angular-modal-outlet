import {
  Component, AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef,
  ViewContainerRef, ViewChild, ElementRef, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { SubscriberComponent } from '../subscriber-component';
import { ModalOutletService } from '../../services/modal-outlet/modal-outlet.service';
import { ComponentModel } from '../../interfaces/component-model';
import { filter } from 'rxjs/operators';
import { overlayFadeTrigger, modalFadeTrigger } from '../../animations';

@Component({
  selector: 'ch-modal-outlet',
  templateUrl: './modal-outlet.component.html',
  styleUrls: ['./modal-outlet.component.css'],
  animations: [
    overlayFadeTrigger,
    modalFadeTrigger
  ]
})
export class ModalOutletComponent extends SubscriberComponent implements AfterViewInit {

  // The ViewContainer to add the modal component to
  @ViewChild('modalHost', {read: ViewContainerRef})
  modalHostRef: ViewContainerRef;

  // The Element of the modal overlay
  @ViewChildren('modalOverlay', {read: ElementRef})
  modalOverlayRefs: QueryList<ElementRef>;

  constructor(public modalOutletService: ModalOutletService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  /**
   * Starts listening to the ModalOutletService for the latest modal component,
   * once the outlet is ready to display modal components
   */
  public ngAfterViewInit(): void {
    // Once the view is ready, listen to the modal outlet service for new modals
    this.addSubscription(this.modalOutletService.modalComponentModel$
      .pipe(filter(Boolean))
      .subscribe((componentModel) => this.loadComponent(componentModel)));
  }

  /**
   * Loads a modal component from a given model
   * @param componentModel the model to load a component from
   */
  private loadComponent(componentModel: ComponentModel): void {
    // Get a component factory for the component type
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(componentModel.componentType);

    // Create the component as a child of the modal host
    const componentRef = this.modalHostRef.createComponent(componentFactory);
    const componentInstance = componentRef.instance;

    // Initialize the component instance with the given context
    for (const key in componentModel.context) {
      if (!componentModel.context.hasOwnProperty(key)) { continue; }
      componentInstance[key] = componentModel.context[key];
    }

    // Listen to the component instance's result event
    const resultEvent = componentInstance[componentModel.resultEventName];
    if (resultEvent && resultEvent instanceof EventEmitter) {
      resultEvent.subscribe((result: any) => this.modalOutletService.closeModal(result));
    } else {
      console.warn(`The model component instance does not contain a valid EventEmitter with the name ${componentModel.resultEventName}. ` +
        'Result events will not be captured for this modal. ' +
        'Double check the name and make sure you are instantiating it in your component\'s constructor.');
    }

    // Tell Angular to re-check for changes because we manually set the data on the component instance
    // TODO: determine if this is still necessary. If it is, check if we can do it on the componentRef instead
    this.changeDetectorRef.detectChanges();
  }

  public onFadeDone(toState: string) {
    // Whenever we finish animating out, clear the children of the modal host
    // to destroy whatever modal component was loaded
    if (toState === 'out') {
      this.modalHostRef.clear();
    }
  }

  public onOverlayClicked(event: { target: any; }) {
    // When we get a click event on the overlay, close the current modal. Don't close the modal
    // if the click was not on the overlay because that could include the modal itself.
    if (this.modalOverlayRefs.find((overlayRef) => overlayRef.nativeElement === event.target)) {
      this.modalOutletService.closeModal();
    }
  }
}
