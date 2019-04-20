import {
  Component, OnInit, AfterViewInit,
  ViewChildren, QueryList, ComponentRef,
  ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { SubscriberComponent } from '../subscriber-component';
import { ModalOutletHostDirective } from '../../directives/modal-outlet-host.directive';
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
export class ModalOutletComponent extends SubscriberComponent implements OnInit, AfterViewInit {

  public componentModel: ComponentModel;

  @ViewChildren(ModalOutletHostDirective)
  public modalHosts: QueryList<ModalOutletHostDirective>;

  private modalHost: ModalOutletHostDirective;

  private componentRef: ComponentRef<any>;

  constructor(private modalService: ModalOutletService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    this.addSubscription(this.modalService.modalComponent$.subscribe((componentModel: ComponentModel) => {
      this.componentModel = componentModel;
      this.loadComponent();
    }));
  }

  public ngAfterViewInit(): void {
    this.updateModalHost(this.modalHosts);
    this.addSubscription(this.modalHosts.changes.subscribe((hosts) => {
      this.updateModalHost(hosts);
    }));
  }

  private updateModalHost(hosts: QueryList<ModalOutletHostDirective>): void {
    if (!hosts) { return; }
    this.modalHost = hosts.first;
    this.loadComponent();
  }

  private loadComponent(): void {
    if (!this.componentModel || !this.modalHost) {
      return;
    }

    // Get and clear the view container reference from the modal host directive
    const viewContainerRef = this.modalHost.viewContainerRef;
    viewContainerRef.clear();

    // Get a component factory for the component type
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.componentModel.componentType);

    // Create the component on the view container reference and give it the input data
    this.componentRef = viewContainerRef.createComponent(componentFactory);

    // Initialize the component instance
    const componentInstance = (<ModalComponent>this.componentRef.instance);
    componentInstance.data = this.componentModel.data;
    if (componentInstance.result) {
      componentInstance.result.subscribe((result: any) => {
        this.modalService.closeModal(result);
      });
    } else {
      console.warn('The modal component instance\'s `result` EventEmitter is undefined. ' +
        'Result events will not be captured.');
    }

    // Tell Angular to re-check for changes because we manually set the data on the component instance
    this.changeDetectorRef.detectChanges();
  }

  public onOverlayClicked(event: { target: any; }) {
    if (!this.componentRef || !this.componentRef.location.nativeElement.contains(event.target)) {
      this.modalService.closeModal();
    }
  }
}
