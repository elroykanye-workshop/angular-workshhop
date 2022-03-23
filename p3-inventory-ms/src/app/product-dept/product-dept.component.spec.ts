import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeptComponent } from './product-dept.component';

describe('ProductDeptComponent', () => {
  let component: ProductDeptComponent;
  let fixture: ComponentFixture<ProductDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
