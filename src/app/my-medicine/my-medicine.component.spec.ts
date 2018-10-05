import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMedicineComponent } from './my-medicine.component';

describe('MyMedicineComponent', () => {
  let component: MyMedicineComponent;
  let fixture: ComponentFixture<MyMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
