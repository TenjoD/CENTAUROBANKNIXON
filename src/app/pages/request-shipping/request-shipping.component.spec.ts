import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestShippingComponent } from './request-shipping.component';

describe('RequestShippingComponent', () => {
  let component: RequestShippingComponent;
  let fixture: ComponentFixture<RequestShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestShippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
