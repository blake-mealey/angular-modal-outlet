import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chModalOutletHost]'
})
export class ModalOutletHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
