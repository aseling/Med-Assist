import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionRefillComponent } from './prescription-refill.component';

describe('PrescriptionRefillComponent', () => {
  let component: PrescriptionRefillComponent;
  let fixture: ComponentFixture<PrescriptionRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
