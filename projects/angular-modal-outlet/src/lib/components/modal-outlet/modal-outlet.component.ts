import {
  Component, AfterViewInit,
  ComponentRef, ComponentFactoryResolver, ChangeDetectorRef, ViewContainerRef, ViewChild } from '@angular/core';
import { SubscriberComponent } from '../subscriber-component';
import { ModalComponent } from '../../interfaces/modal-component';
import { ModalOutletService } from '../../services/modal-outlet/modal-outlet.service';
import { ComponentModel } from '../../interfaces/component-model';
import { animation, style, animate, trigger, state, transition, useAnimation } from '@angular/animations';

const popDefaultParams = {
  duration: '0.2s ease',
  scale: 0.75
};

const popStyle = {
  opacity: 0,
  transform: 'scale({{ scale }})'
};

const popIn = animation([
  style(popStyle),
  animate('{{ duration }}')
], {
  params: popDefaultParams
});

const popOut = animation([
  animate('{{ duration }}'),
  style(popStyle)
], {
  params: popDefaultParams
});

@Component({
  selector: 'ch-modal-outlet',
  templateUrl: './modal-outlet.component.html',
  styleUrls: ['./modal-outlet.component.css'],
  animations: [
    trigger('fade', [
      state('out', style({
        display: 'none'
      })),
      state('in', style({})),
      transition('out => in', [
        useAnimation(popIn)
      ]),
      transition('in => out', [
        useAnimation(popOut)
      ])
    ])
  ]
})
export class ModalOutletComponent extends SubscriberComponent implements AfterViewInit {

  public componentModel: ComponentModel;

  @ViewChild('outletHost', {read: ViewContainerRef})
  modalHostRef: ViewContainerRef;

  private componentRef: ComponentRef<any>;

  constructor(private modalOutletService: ModalOutletService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  public ngAfterViewInit(): void {
    // Once the view is ready, listen to the modal outlet service for new modals
    this.addSubscription(this.modalOutletService.modalComponentModel$
      .subscribe((componentModel) => {
        // Update our component modal, and if there is a new modal, load is
        this.componentModel = componentModel;
        if (this.componentModel) {
          this.loadComponent();
        }
      }));
  }

  private loadComponent(): void {
    // Get a component factory for the component type
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.componentModel.componentType);

    // Create the component as a child of the modal host
    this.componentRef = this.modalHostRef.createComponent(componentFactory);

    // Initialize the component instance with the input data and listen to its `result` event
    const componentInstance = (<ModalComponent>this.componentRef.instance);
    componentInstance.data = this.componentModel.data;
    if (componentInstance.result) {
      componentInstance.result.subscribe((result: any) => {
        this.modalOutletService.closeModal(result);
      });
    } else {
      console.warn('The modal component instance\'s `result` EventEmitter is undefined. ' +
        'Result events will not be captured.');
    }

    // Tell Angular to re-check for changes because we manually set the data on the component instance
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
    // When we get a click event that was outside of the modal component, close the current modal
    if (!this.componentRef || !this.componentRef.location.nativeElement.contains(event.target)) {
      this.modalOutletService.closeModal();
    }
  }
}
