import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularModalOutletComponent } from './angular-modal-outlet.component';

describe('AngularModalOutletComponent', () => {
  let component: AngularModalOutletComponent;
  let fixture: ComponentFixture<AngularModalOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularModalOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularModalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
