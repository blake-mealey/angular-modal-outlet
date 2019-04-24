import { Type } from '@angular/core';

export interface ComponentModel {
  componentType: Type<any>;
  context: Object;
  resultEventName: string;
}
