import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProductsComponent } from './request-products.component';

describe('RequestProductsComponent', () => {
  let component: RequestProductsComponent;
  let fixture: ComponentFixture<RequestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
