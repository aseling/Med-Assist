import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrescriptionRefillComponent } from './admin-prescription-refill.component';

describe('AdminPrescriptionRefillComponent', () => {
  let component: AdminPrescriptionRefillComponent;
  let fixture: ComponentFixture<AdminPrescriptionRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrescriptionRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrescriptionRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
