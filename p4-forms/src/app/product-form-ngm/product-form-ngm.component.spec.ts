import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormNgmComponent } from './product-form-ngm.component';

describe('ProductFormNgmComponent', () => {
  let component: ProductFormNgmComponent;
  let fixture: ComponentFixture<ProductFormNgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormNgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormNgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
